import { SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { createGlobalStyle,ThemeProvider } from "styled-components";

const theme = {
font: "'Inter', sans-serif"
}

interface themeinterface  {
  font:string;
}

type input = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<input>();
  const onSubmit: SubmitHandler<input> = (data) => {
    console.log(data);
  };
  console.log("error happened", errors);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <Mainsection>
      <Sectionone>
        <div>
          <Header>
            {" "}
            <p>Learn to code </p> by watching others
          </Header>
          <Textsection>
            {" "}
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </Textsection>
        </div>
      </Sectionone>{" "}
      <Sectiontwo>
        <Trybutton>
          {" "}
          <p>Try it free 7 days</p> then $20/mo. thereafter{" "}
        </Trybutton>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="First name"
            {...register("firstName", {
              pattern: { value: /^[A-Za-z]+$/i, message: "მხოლოდ ასოები ძმა" },
              required: "cantbe clear",
            })}
            emzo={errors.firstName?.message}
          />
          {errors?.firstName && (
            <Ermessage>{errors.firstName.message}</Ermessage>
          )}
          <Input
            placeholder="Last name"
            {...register("lastName", {
              pattern: { value: /^[A-Za-z]+$/i, message: "მხოლოდ ასოები ძმა" },
              required: "cantbe clear",
              maxLength: 12,
            })}
            emzo={errors.lastName?.message}
          />
          {errors?.lastName && <Ermessage>{errors.lastName.message}</Ermessage>}

          <Input
            placeholder="Password"
            {...register("password", {
              pattern: { value: /^[A-Za-z]+$/i, message: "მხოლოდ ასოები ძმა" },
              required: "cantbe clear",
              minLength: { value: 3, message: "min12" },
            })}
            emzo={errors.password?.message}
          />

          {errors?.password && <Ermessage>{errors.password.message}</Ermessage>}

          <Input
            placeholder="Email Adress"
            {...register("email", {
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "მიუთითე ვალიდური მეილი",
              },
              required: "cantbe clear",
              minLength: { value: 3, message: "მინიმუმ 3 სიმბოლო" },
            })}
            emzo={errors.email?.message}
          />

          {errors?.email && <Ermessage>{errors.email.message}</Ermessage>}
              <Claimbutton type="submit">CLAIM YOUR FREE TRIAL</Claimbutton>

              <Termsagree> By clicking the button, you are agreeing to our  
                <Termspan> Terms and Services</Termspan>
              </Termsagree>
        </Form>
      </Sectiontwo>
    </Mainsection>
    </ThemeProvider >

  );
}

export default App;
interface styledprop {
  emzo: any;
}

const Input = styled.input<styledprop>`
  ${(props) => css`
    border: 1px solid ${props.emzo ? "red" : "#DEDEDE"};
    width: 90%;
    height: 56px;
    background: ${props.emzo
      ? "url(/images/icon-error.svg) no-repeat ;"
      : null};
    background-position: 93% 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    border-radius: 5px;
    padding-left: 19.41px;
    text-size-adjust: 3rem;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.25px;
  `}
`;

const Claimbutton = styled.button`
  background-color: #38CC8B;
  width: 90%;
    height: 56px;
  align-self: center;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 1px;
  color: white;

`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin-left: auto;
  margin-right: auto;
  padding-top: 24px;
  @media (min-width: 1200px) {
    background-color: #ffffff;
    margin-right: 165px;
    width: 540px;
    height: 470px;
  }
`;
const Trybutton = styled.button`
  background-color: #5e54a4;
  border: none;
  color: #ffffff;
  width: 85%;
  height: 88px;
  border-radius: 10px;
  box-shadow: 0px 8px #00000036;
  margin-bottom: 24px;

  @media (min-width: 1200px) {
    width: 540px;
    height: 60px;
  }
`;

const Textsection = styled.div`
  color: white;
  margin-left: 24px;
  margin-right: 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  height: 130px;
  text-align: center;
`;

const Header = styled.header`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.29px;
  text-align: center;
  color: white;
  height: 80px;
  @media (min-width: 768px) {
  }
`;

const Sectionone = styled.div`
  padding-top: 88px;

  @media (min-width: 1200px) {
    margin-left: 165px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const Sectiontwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px) {
    margin-left: 45px;
    margin-top: 121px;
    margin-right: 165px;
    width: 540px;
    height: 474px;
  }
`;

const Mainsection = styled.div`
  background-color: #ff7979;
  height: 1000px;
  background-image: url(/images/bg-intro-mobile.png);
  @media (min-width: 1200px) {
    display: grid;
    background-color: azure;
    grid-template-columns: 1fr 1fr;
    background-color: #ff7979;
    height: 100vh;
    background-image: url(/images/bg-intro-desktop.png);
  }
`;

const Ermessage = styled.p`
  text-align: right;
  margin-right: 5%;
  color: #ff7979;
  font-weight: 500;
  font-style: italic;
  line-height: 16.5px;
  font-size: 11px;
  margin-top: 0;

`;


const GlobalStyle = createGlobalStyle<{theme:themeinterface}>`

  html,
  body {
    padding: 0;
    margin: 0;
   
     font-family:  ${(props) => props.theme.font}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const Termsagree = styled.div`
font-weight: 500;
font-size: 11px;
line-height: 26px;
color:#A6A1CF;
text-align: center;
`

const Termspan = styled.span`
  color: #ff7979;
  font-weight: 700;
  font-size: 11px;
  line-height: 26px;
`