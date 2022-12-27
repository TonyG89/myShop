import { menuTitle } from './const.js'

export default function menu() {
  const parentEl = document.querySelector("#menu");
  menuTitle.forEach(title => {
    const currentPage = `/${Object.keys(title)}.html`
    parentEl.innerHTML += `
      <li class="nav-item ${location.pathname === currentPage ? 'active' : ''}">
      <a class="nav-link" href="${Object.keys(title)}.html" class>${Object.values(title)}</a>
      </li>
      `
  })
}

