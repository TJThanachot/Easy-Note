import Swal from "sweetalert2";

type Props = {};

export default function Footer({}: Props) {
  function alert(info: string): void {
    let newInfo;
    switch (info) {
      case "contact":
        newInfo = {
          title: "Contact Us?",
          text: "thanachot.pongkonglad@gmail.com",
        };
        break;
      case "help":
        newInfo = {
          title: "Help?",
          text: "Content will provide later",
        };
        break;
      case "developer":
        newInfo = {
          title: "developer?",
          text: "Thanchot Pongkonglad",
        };
        break;
    }

    Swal.fire({
      title: newInfo?.title,
      text: newInfo?.text,
      icon: "info",
    });
  }
  return (
    <>
      <div className="text-l h-[4rem] flex flex-row justify-center gap-[2rem] items-center px-[2rem]">
        <button
          onClick={() => {
            alert("contact");
          }}
        >
          Contact Us
        </button>
        <button
          onClick={() => {
            alert("help");
          }}
        >
          Help
        </button>
        <button
          onClick={() => {
            alert("developer");
          }}
        >
          Developer
        </button>
        <div className="text-center">@COPYRIGHT 2023</div>
      </div>
    </>
  );
}
