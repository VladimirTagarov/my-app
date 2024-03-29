// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

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
  // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5NDQ1MjkyLCJpYXQiOjE2OTk0NDQ5OTIsImp0aSI6ImZjZWQyNzNlN2UzYzQ2OTM5MjdiNWY1NTdmNWQ5MWQzIiwidXNlcl9pZCI6MjU0M30.bdGvqxXeXdPWMlZ388B-S4ALKPOtkWVL_3YjY8DfcW4";
  // const accessToken = localStorage.getItem('access');
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    }
  );

  if (!response.ok) {
    // localStorage.removeItem('user');
    // window.location.reload(true);
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function getLikes(accessToken, id) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: "POST",
      // body: JSON.stringify({
      //   email: email,
      //   password: password,
      // }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    // throw new Error("Ошибка сервера");
    localStorage.removeItem("user");
    window.location.reload(true);
  }

  const data = await response.json();
  return data;
}

export async function getDisLikes(accessToken, id) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: "DELETE",
      // body: JSON.stringify({
      //   email: email,
      //   password: password,
      // }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    // throw new Error("Ошибка сервера");
    localStorage.removeItem("user");
    window.location.reload(true);
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

  const data = await response.json();

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
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Ошибка обновления токена");
  } else {
    return data;
  }
}
