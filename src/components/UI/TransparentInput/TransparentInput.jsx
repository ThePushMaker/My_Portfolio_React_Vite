.transparentInput

.contact form input, .contact form textarea {
  width: 100%;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 20px;
  color: #fff;
  margin: 0 0 8px 0;
  padding: 18px 26px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
}
.contact form input:focus, .contact form textarea:focus {
  background: rgba(255, 255, 255, 0.75);
  color: #28004e;
  backdrop-filter: brightness(200%);
}
.contact form input::placeholder, .contact form textarea::placeholder {
  font-weight: 400;
  color: #fff;
}
.contact form input:focus::placeholder, .contact form textarea:focus::placeholder {
  color: #000000;
  opacity: 0.8;
}