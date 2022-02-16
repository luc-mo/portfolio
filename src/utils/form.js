function verifyText(text) {
  const reg = /\w/g;
  return reg.test(text);
}

function verifyEmail(email) {
  const reg = /\w+@\w+\.\w/;
  return reg.test(email);
}

export function verifyContact(contact) {
  const verifiedName = verifyText(contact.name);
  const verifiedEmail = verifyEmail(contact.email);
  const verifiedSubject = verifyText(contact.subject);
  const verifiedMessage = verifyText(contact.message);
  if(!verifiedName && !verifiedEmail && !verifiedSubject && !verifiedMessage) {
    alert('El formulario no puede estar vacío');
    return false;
  }
  else if(!verifiedName || !verifiedEmail || !verifiedSubject || !verifiedMessage) {
    alert(`Por favor, completar todos los campos requeridos`);
    return false;
  }
  else
    return true;
}