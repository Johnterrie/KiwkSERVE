app.post("/Signup-account", (req, res) => {
    const { error, value } = createUser(req.body);
    try {
      const Signup = new UserName({
        fullName: value.fullName,
        userName: value.UserName,
        emailAddress: value.email,
        password: value.password,
        createAt: Date(),
      });
      Signup.save();
      res.status(200).send("newUser created successfully!!!");
    } catch (error) {
      console.error(error);
    }
    console.log(process.env);
    res.send("Login-User");
  });
  