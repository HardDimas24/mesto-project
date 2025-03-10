const myHeaders = new Headers();
myHeaders.append("authorization", "••••••");

functionMe() {
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/users/me", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

const myHeaders = new Headers();
myHeaders.append("authorization", "2e99494a-bcbf-4e46-864c-f78ed469d050");

functionCards() {
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};
}

fetch("https://nomoreparties.co/v1/apf-cohort-202/cards", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("authorization", "••••••");

funcPatch() {
const raw = JSON.stringify({
  "name": "Drobyshevskiy",
  "about": "The best"
});

  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("https://nomoreparties.co/v1/apf-cohort-202/users/me?Content-Type=application/json", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("authorization", "2e99494a-bcbf-4e46-864c-f78ed469d050");

funcPost() {
const raw = JSON.stringify({
  "likes": [],
  "_id": "5d1f0611d321eb4bdcd707dd",
  "name": "Байкал",
  "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  "owner": {
    "name": "Jacques Cousteau",
    "about": "Sailor, researcher",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
    "_id": "ef5f7423f7f5e22bef4ad607",
    "cohort": "local"
  },
  "createdAt": "2019-07-05T08:10:57.741Z"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/cards?_id=67cf28029515d0223e918a45", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}