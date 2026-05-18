export function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "petin@gmail.com" && password === "123") {
        resolve({
          token: "pettin-auth-token",
        });
      } else {
        reject(new Error("Correo o contraseña incorrectos"));
      }
    }, 1500);
  });
}
