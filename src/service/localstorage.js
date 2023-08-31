import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';

const PHONE_BOOK_KEY = 'pfhone-book';


const saveData = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    onError(error)
  }
};

const loadData = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    onError(error)
  }
};

const loadPhoneBook = () => loadData(PHONE_BOOK_KEY) || [];

const savePhoneBook = data => saveData(PHONE_BOOK_KEY, data);



function onError(error) {
  Notiflix.Notify.failure(error.message);
}


export {
  loadPhoneBook,
  savePhoneBook
};
