export async function getTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function getFavoritesTracks(accessToken) {

  // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTcxMjcxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4YzQ5NDNmOWNmNTRlZjI5NmFmNTMyOWUwODM4YWQ5IiwidXNlcl9pZCI6NzkyfQ.5n8YHTjsgAnYnc4gioyV1wPnxM2D16PS6c9kNhC-JoE";
  const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    Authorization: `Bearer ${accessToken}`,

  },
})

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function getLikes(accessToken, id) {

    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
    method: "POST",
    // body: JSON.stringify({
    //   email: email,
    //   password: password,
    // }),
    headers: {
      "content-type": "application/json",
    Authorization: `Bearer ${accessToken}`,

  },
})

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function getDisLikes(accessToken, id) {

  const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
  method: "DELETE",
  // body: JSON.stringify({
  //   email: email,
  //   password: password,
  // }),
  headers: {
    "content-type": "application/json",
  Authorization: `Bearer ${accessToken}`,

},
})

if (!response.ok) {
  throw new Error("Ошибка сервера");
}

const data = await response.json();
return data;
}


export async function getRegistration(email, password, username) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        username: email,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Ошибка регистрации");
  } else {
    return data;
  }
}

export async function getLogin(email, password) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/login/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );
  // .then((response) => response.json())
  // .then((json) => console.log(json));

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Ошибка входа");
  } else {
    return data;
  }
}

export async function getToken(email, password) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );
  // .then((response) => response.json())
  // .then((json) => console.log(json));

  const data = await response.json;

  if (!response.ok) {
    throw new Error("Ошибка получения токена");
  } else {
    return data;
  }
}

export async function refreshToken(refreshKey) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/refresh",
    {
      method: "POST",
      body: JSON.stringify({
        refresh: refreshKey,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    })

    const data = await response.json;

    if (!response.ok) {
      throw new Error("Ошибка обновления токена");
    } else {
      return data;
    }
  }

