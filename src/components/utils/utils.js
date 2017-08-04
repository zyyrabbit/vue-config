export default {
	getStyle: (elem,attrName)=>{
				// 属性名转化合法属性名
				const toCamelCase = (str) => {return str.replace(/\-(\w)/g,function(all,letter){
					return letter.toUpperCase();
					});
				}
				const toDashDelimited  = (str) => {return str.replace(/([A-Z])/g,"-$1")};
				//考虑IE兼容性写法
				 const style = window.getComputedStyle ? window.getComputedStyle(elem,null) : elem.currentStyle;
				 return style.getPropertyValue ? style.getPropertyValue(toDashDelimited(attrName)) : style.getAttribute(toCamelCase(attrName));
			}
}