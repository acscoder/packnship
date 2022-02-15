
import Button from '../components/button'

var ShortcodeParser = require("meta-shortcodes");

var ScParser = ShortcodeParser();

ScParser.add("button", function (opts, content) {
  
  return '<a href="how-it-works" class="text-'+opts.color+'">'+content+'</a>'
  });

export default ScParser