 function replaceTag(str) {
        return str.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[URL=$1]$2[/URL]')
    }
    var str = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'
    console.log(replaceTag(str))