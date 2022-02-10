/* eslint-disable no-useless-escape */

/**
 * Shortcode Parser
 * by mendezcode
 * @see https://github.com/mendezcode/shortcode-parser
 * 
 * Slightly modified for the browser, and refactored into ES6
 */
const shortcodes = {}

const pattern = {
  attrs: /(\s+([a-z0-9\-_]+|([a-z0-9\-_]+)\s*=\s*([a-z0-9\-_]+|\d+\.\d+|'[^']*'|"[^"]*")))*/.toString().slice(1, -1),
  slash: /\s*\/?\s*/.toString().slice(1, -1),
  open: name => /\[\s*%s/.toString().slice(1, -1).replace('%s', name),
  rightBracket: '\\]',
  close: name => /\[\s*\/\s*%s\s*\]/.toString().slice(1, -1).replace('%s', name),
  content: /(.|\n|)*?/.toString().slice(1, -1),
  space: /\s*/.toString().slice(1, -1),
}

function typecast(val) {
  val = val.trim().replace(/(^['"]|['"]$)/g, '')

  if (/^\d+$/.test(val)) {
    return parseInt(val, 10)
  } else if (/^\d+\.\d+$/.test(val)) {
    return parseFloat(val)
  } else if (/^(true|false)$/.test(val)) {
    return (val === 'true')
  } else if (/^undefined$/.test(val)) {
    return undefined
  } else if (/^null$/i.test(val)) {
    return null
  } else {
    return val
  }
}

function closeTagString(name) {
  return /^[^a-z0-9]/.test(name) ? `[${name[0].replace('$', '\\$')}]?${name.slice(1)}` : name
}

function parseShortcode(name, buf, inline) {
  let regex
  let match
  let data = {}
  let attr = {}

  if (inline) {
    regex = new RegExp('^' +
      pattern.open(name) +
      pattern.attrs +
      pattern.space +
      pattern.slash +
      pattern.rightBracket, 'i'
    )
  } else {
    regex = new RegExp('^' +
      pattern.open(name) +
      pattern.attrs +
      pattern.space +
      pattern.rightBracket, 'i'
    )
  }

  while ((match = buf.match(regex)) !== null) {
    const key = match[3] || match[2]
    const val = match[4] || match[3]
    const pattern = match[1]

    if (pattern) {
      const idx = buf.lastIndexOf(pattern)
      attr[key] = (val !== undefined) ? typecast(val) : true
      buf = buf.slice(0, idx) + buf.slice(idx + pattern.length)
    } else {
      break
    }
  }

  attr = Object.keys(attr).reverse().reduce((prev, current) => {
    prev[current] = attr[current]
    return prev
  }, {})

  buf = buf.replace(regex, '').replace(new RegExp(pattern.close(closeTagString(name))), '')

  return {
    attr: attr,
    content: inline ? buf : buf.replace(/(^\n|\n$)/g, ''),
  }
}

export default {
  _shortcodes: shortcodes,
  add(name, callback) {
    shortcodes[name] = callback
  },
  remove(name) {
    delete shortcodes[name]
  },
  parse(buf, extra = {}, context = shortcodes) {
    for (let name in context) {
      // Allow absence of first char if not alpha numeric. E.g. [#shortcode]...[/shortcode]
      const regex = {
        wrapper: new RegExp(
          pattern.open(name) +
          pattern.attrs +
          pattern.rightBracket +
          pattern.content +
          pattern.close(closeTagString(name)), 'gi'
        ),
        inline: new RegExp(
          pattern.open(name) +
          pattern.attrs +
          pattern.slash +
          pattern.rightBracket, 'gi'
        ),
      }

      let matches = buf.match(regex.wrapper)

      if (matches) {
        for (let m, data, i = 0, len = matches.length; i < len; i++) {
          m = matches[i]
          data = parseShortcode(name, m)
          buf = buf.replace(m, context[name].call(null, data.content, data.attr, extra))
        }
      }

      matches = buf.match(regex.inline)

      if (matches) {
        let m
        while ((m = matches.shift()) !== undefined) {
          let data = parseShortcode(name, m, true)
          buf = buf.replace(m, context[name].call(null, data.content, data.attr, extra))
        }
      }
    }

    return buf
  },
  parseInContext(buf, context, data) {
    return this.parse(buf, data, context)
  },
}

/* eslint-enable no-useless-escape */