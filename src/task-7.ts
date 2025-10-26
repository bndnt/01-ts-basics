function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then((result) => console.log("Task 7 result: ", result));
getMessage().then((result) => console.log("Task 7 type: ", typeof result));
