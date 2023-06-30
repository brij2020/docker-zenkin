{
    apps : [
      {
        name      : "jenkins",
        script    : "npm",
        interpreter: "none",
        args: "serve -s build -p 3000"
      }
    ]
  }