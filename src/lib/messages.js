const color = "\x1b[1;35m";
const underline = "\x1b[94;4m";
const normal = "\x1b[0m";
export const introMessage = [
  "+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
  "|                                                                             |",
  "| WebVM is a virtual Linux environment running in the browser via WebAssembly.|",
  "|                                                                             |",
  "| This is my first successful attempt to get Xorg running in WebVM.           |",
  "|                                                                             |",
  "| It took a lot of trial and error but it's finally done. I had many problems |",
  "| getting this up and running. Most of the work has been done for you here.   |",
  "| To run Xorg, you need to force it onto VT7. Once you do this, it will       |",
  "| properly raise the X server to the foreground. If I had configured drivers  |",
  "| better, you would have working mouse and keyboard support.                  |",
  "|                                                                             |",
  "+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
  "",
  "   The system will be starting soon. Once downloaded it will start much faster.",
  "",
  "   Once you are loaded, you can start X with 'xinit -- :0 vt7' to start xterm.",
  "     TWM is also included but seems to hang the VM.",
];
export const errorMessage = [
  color + "CheerpX could not start" + normal,
  "",
  "Check the DevTools console for more information",
  "",
  "CheerpX is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
  "",
  "Give it a try from a desktop version / another browser!",
  "",
  "CheerpX internal error message is:",
  "",
];
export const unexpectedErrorMessage = [
  color + "WebVM encountered an unexpected error" + normal,
  "",
  "Check the DevTools console for further information",
  "",
  "Please consider reporting a bug!",
  "",
  "CheerpX internal error message is:",
  "",
];
