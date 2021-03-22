# 3d-hexgonal-prism
3d hexagonal prism is a pure javascript library, which can make an amazing hexagonal prism that could be used in image gallery, show-off of marketing products etc.
## USAGE:

```javascript
var cont = document.getElementById('hp-cont');
/*  hp3d(cont) will return the 3d hexagonal prism made in DIV "#hp-cont"  */
var hxgn = hp3d(cont);
/*  Now, you could easily extract faces using javascript's childNodes property  */
var faces = hxgn.childNodes;
for(var i=0;i<faces.length;i++)
{
  faces[i].style.border="2px solid #000";
  faces[i].style.background="aqua";
}
```

```html
<div id="hp-cont" style="width:300px; height:300px;"></div>
```

