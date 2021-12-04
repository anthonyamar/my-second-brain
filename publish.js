var path = decodeURI(window.location.pathname).replaceAll("+", " ");
var str = path.substring(1) + ".md";
var frontmatter = window.app.site.cache.cache[str].frontmatter;

var metas = {}
metas["title"] = frontmatter.title;
metas["description"] = frontmatter.description;

Object.keys(metas).forEach(function(key){
  var metaTag = document.createElement('meta'); 
  metaTag.name = key; 
  metaTag.content = metas[key]; 
  document.head.appendChild(metaTag);
});