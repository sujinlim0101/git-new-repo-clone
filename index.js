function fitSmallDevice() {
  let element = document.getElementsByClassName('disable-xs');
  let hideLinks = document.getElementById('hide-links');
  if (element.length) {
    hideLinks.classList.remove('disable-xs');
  } else {
    hideLinks.classList.add('disable-xs');
  }
}

function clickAvatarBox() {
  let element = document.getElementsByClassName('hide-click-md-avatar');
  let detailMenuAvatar = document.getElementById('detail-menu-avatar');
  if (element.length) {
    detailMenuAvatar.classList.remove('hide-click-md-avatar');
  } else {
    detailMenuAvatar.classList.add('hide-click-md-avatar');
  }
}

function clickPlusBox() {
  let element = document.getElementsByClassName('hide-click-md-plus');
  let detailMenuPlus = document.getElementById('detail-menu-plus');
  if (element.length) {
    detailMenuPlus.classList.remove('hide-click-md-plus');
  } else {
    detailMenuPlus.classList.add('hide-click-md-plus');
  }
}
