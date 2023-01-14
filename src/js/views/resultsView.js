import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errMessage = 'No recipes found!';
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(res => previewView.render(res, false)).join('');
  }
}
export default new ResultsView();
