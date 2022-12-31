import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../components/Header";
import { TimerContainer } from "../components/TimerContainer";
import { TimerInput } from "../components/TimerInput";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

const Home: NextPage = () => {

  const [newTime, setNewTime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const timeToDays = time * 60 * 60 * 24 * 1000;

  let countDownDate = new Date().getTime() + timeToDays;

  useEffect(() => {
    let updateTime = setInterval(() => {
      let now = new Date().getTime();

      let difference = countDownDate - now;

      let newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      let newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if(difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    })

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  function handleClick() {
    setTime(newTime);
    console.log(time);
    setNewTime(0);    
  };

  function handleChange(e: any) {
    let inputTime = e.target.value;
    setNewTime(inputTime);
  };

  return (
    <div className="flex min-w-full min-h-screen flex-col items-center justify-center py-2 bg-[url('../assets/background.png')]">
      <Head>
        <title>Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />

      <TimerInput
        value={newTime}
        handleClick={handleClick}
        handleChange={handleChange}
      />

      <Footer />
    </div>
  );
};

export default Home;
