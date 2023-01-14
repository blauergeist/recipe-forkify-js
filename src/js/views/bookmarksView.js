import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errMessage = 'No bookmarks! Bookmark a recipe to add it to the list.';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(res => previewView.render(res, false)).join('');
  }

  // <div class="preview__user-generated">
  // <svg>
  //     <use href="${icons}#icon-user"></use>
  // </svg>
  // </div>
}
export default new BookmarksView();
