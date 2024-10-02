import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return signUpUser(firstName, lastName)
    .then(() => uploadPhoto(fileName))
    .then((result) => {
      console.log(result);
    })
    .catch(() => {});
}
