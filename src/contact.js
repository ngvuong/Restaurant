export function addContact() {
  const content = document.querySelector("#content");
  const main = document.createElement("main");
  const contactInfo = document.createElement("div");

  contactInfo.innerHTML = `<p>Phone: 777-545-6000</p>
    <p>Email: Gma55@gmail.com</p>
    55 G Street <br/>
    Sumware, MA 54545
    <p>Open everyday 10 A.M - 8 P.M</p>`;

  main.classList.add("contact-page");
  main.append(contactInfo);
  content.append(main);
}
