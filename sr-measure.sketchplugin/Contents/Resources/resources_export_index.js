!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"getRoot",(function(){return r})),n.d(e,"getFileContent",(function(){return i})),n.d(e,"getSavePath",(function(){return o})),n.d(e,"writeFile",(function(){return a}));var r=function(t){return t.scriptPath.stringByDeletingLastPathComponent().stringByDeletingLastPathComponent().stringByDeletingLastPathComponent()},i=function(t){return NSString.stringWithContentsOfFile_encoding_error(t,4,nil)},o=function(t){t.document.fileURL()&&t.document.fileURL().path().stringByDeletingLastPathComponent();var e=t.document.displayName().stringByDeletingPathExtension(),n=NSSavePanel.savePanel();return n.setTitle("Export spec"),n.setNameFieldLabel("Export to:"),n.setPrompt("Export"),n.setCanCreateDirectories(!0),n.setNameFieldStringValue(e),n.runModal()==NSOKButton&&n.URL().path()},a=function(t){var e=NSString.stringWithString(t.content),n=[];NSFileManager.defaultManager().createDirectoryAtPath_withIntermediateDirectories_attributes_error(t.path,!0,nil,nil),n.push(t.path,"/",t.fileName),n=n.join(""),e.writeToFile_atomically_encoding_error(n,!1,4,null)}}]);