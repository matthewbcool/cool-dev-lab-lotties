var elements = []
function loadAssetsFromURLs(URLs){
    
    for (var url of URLs){  
      var el = document.createElement("a-entity")
      AFRAME.scenes[0].appendChild(el)
      el.setAttribute("media-loader", { src: url, fitToBox: true, resolve: true })
      el.setAttribute("networked", { template: "#interactable-media" } )
      elements.push(el)
    }
    return elements
  }

  loadAssetsFromURLs(['https://github.com/matthewbcool/cool-dev-lab-lotties/blob/master/glbs/portal.glb?raw=true'])

  elements[0].object3D.position.y = 19
  elements[0].object3D.position.z = -30
  elements[0].object3D.position.x = -3