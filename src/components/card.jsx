import { styled } from "@stitches/react";
import { useQuery } from "react-query";
import { Spinner } from "./icons/spinner";

const Base = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "250px",
  minHeight: "222px",
  height: "fit-content",

  backgroundColor: "#FFFFFF",
  boxShadow: "0 0 5px 0 rgba(0,0,0, 0.10)",
  borderRadius: "5px",
});

const Header = styled("div", {
  display: "flex",
  height: "42px",
  width: "100%",

  borderBottom: "2px solid #EBEBEB",

  fontSize: "18px",
  color: "#737C84",

  alignItems: "center",
  justifyContent: "center",
});

const Main = styled("div", {
  display: "flex",
  height: "138px",
  width: "100%",

  fontFamily: "Helvetica",
  fontSize: "80px",
  color: "#737C84",

  alignItems: "center",
  justifyContent: "center",

  variants: {
    color: {
      cold: { color: "#69A3FF" },
      neutral: { color: "#FF9632" },
      warm: { color: "#ED1946" },
    },
  },
});
const GrauWrap = styled("div", {
  fontFamily: "Helvetica",
  fontSize: "43px",
  height: "fit-content",
  paddingBottom: "20px",
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "46px",

  backgroundColor: "rgba(241,241,241, 0.5)",
  justifyContent: "flex-end",
  alignItems: "center",

  fontSize: "13px",
  color: "#B4B4B4",

  variants: {
    show: {
      true: { display: "flex" },
      false: { display: "none" },
    },
  },

  defaultVariants: {
    show: false,
  },
});

const Humidity = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100%",

  alignItems: "center",
  justifyContent: "flex-end",

  fontSize: "13px",
  color: "#B4B4B4",
});

const Pressure = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100%",

  alignItems: "center",
  justifyContent: "flex-end",

  fontSize: "13px",
  color: "#B4B4B4",
});

const Wrap = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",

  marginTop: "5px",
  alignItems: "flex-end",
  justifyContent: "center",

  color: "#737C84",
});

const DataWrap = styled("div", {
  fontSize: "16px",
  color: "#737C84",
});

const Footer = styled("div", {
  display: "flex",
  height: "42px",
  width: "100%",

  backgroundColor: "rgba(241,241,241, 0.5)",
  fontSize: "10px",
  color: "#B4B4B4",

  alignItems: "center",
  justifyContent: "center",
});

const Button = styled("button", {
  width: "100px",
  height: "40px",

  border: "1px solid #737C84",
  borderRadius: "30px",

  marginTop: "20px",

  color: "#737C84",
  fontSize: "16px",
});

const MainWrap = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: "1",
});

const Span = styled("span", {
  fontSize: "16px",
  color: "#ED1946",
});

export const Card = (props) => {
  const key = `/weather?lat=${props.latitude}&lon=${props.longitude}&units=metric`;

  /*Abaixo inserir API Key dentro do terceiro campo ${} */
  const fetcher = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${process.env.REACT_APP_APIKEY}&units=metric`
    );
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  };

  const options = {
    cacheTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 10,
  };

  const { data, isLoading, isError, isSuccess, dataUpdatedAt, refetch } =
    useQuery(key, fetcher, options);

  if (isLoading) {
    return (
      <Base>
        <Header>
          {props.city}, {props.country}
        </Header>
        <MainWrap>
          <Spinner />
        </MainWrap>
      </Base>
    );
  }

  if (isError) {
    return (
      <Base>
        <Header>
          {props.city}, {props.country}
        </Header>
        <MainWrap>
          <Span>Something went wrong</Span>
          <Button onClick={refetch}>Try again</Button>
        </MainWrap>
      </Base>
    );
  }

  function color() {
    if (data.main.temp <= 5) {
      return "cold";
    } else if (data.main.temp > 5 && data.main.temp <= 25) {
      return "neutral";
    } else {
      return "warm";
    }
  }

  /*Conversão das horas */
  var utcSeconds = data.dt;
  var myDate = new Date(utcSeconds * 1000);
  var timeStr = myDate.toLocaleString("en-US").split(" ")[1];
  var amPm = myDate.toLocaleString("en-US").split(" ")[2];

  return (
    <Base>
      <Header>
        {props.city}, {props.country}
      </Header>
      <Main data-test-id="dataTemperatura" color={color()}>
        {data.main.temp} <GrauWrap>°</GrauWrap>
      </Main>
      <Wrapper show={props.highlight}>
        <Humidity>
          HUMIDITY
          <Wrap>
            <DataWrap>{data.main.humidity}</DataWrap>%
          </Wrap>
        </Humidity>
        <Pressure>
          PRESSURE
          <Wrap>
            <DataWrap>{data.main.pressure}</DataWrap>nPa
          </Wrap>
        </Pressure>
      </Wrapper>
      <Footer>Updated at {timeStr + " " + amPm} </Footer>
    </Base>
  );
};
