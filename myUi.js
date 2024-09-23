var log = console.log

var tabViewStates = []
var tv = document.querySelectorAll(".tabview-cont")

for (let i = 0; i < tv.length; i++) {
  let tvState = {
    contents: null,
    tabs: null,
    currentTab: 0,
    tabClickHandler(e) {
      tabNum = this.idxOfChild(e.currentTarget)
      if(tabNum == this.currentTab) return

      this.contents[this.currentTab].style.display = "none"
      this.contents[tabNum].style.display = "block"

      this.currentTab = tabNum
    },
    idxOfChild(ele) {
      var els = ele.parentNode.children; // or .childNodes if you want TextNodes
      return [].indexOf.call(els, ele);
    }
  }
  tabViewStates.push(tvState)

  tvState.tabs = tv[i].getElementsByClassName("tabview-tabs-cont")[0].children
  tvState.contents = tv[i].getElementsByClassName("tabview-content-cont")[0].children

  Array.from(tvState.tabs).forEach((ele, idx) => {
    ele.addEventListener("click", (e) => tvState.tabClickHandler(e))
  })
}