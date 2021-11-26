import { SettingsInputAntennaTwoTone, SettingsSystemDaydreamTwoTone, SettingsTwoTone } from '@mui/icons-material';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MenuAppBar from './component/header'
import { useState } from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector} from "react-redux"



function App() {
  const state = useSelector((e) => e);
  const [st, setst] = useState(true);
  const [marks, setMarks] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState (state);
  const [questionInd, setQuestionInd] = useState(0);

  const nextQuestion = ()=>{
    if(questions.length - 1 == questionInd){
        setShowResult(true);
    }else{
      setQuestionInd(questionInd + 1);
    }
  };
  const checkAnswer = (cor, user) => {
    if (cor == user){
      setMarks(marks + 1);
    }
    nextQuestion();
  };
  return (
    <div>
    <div className="App">
      <MenuAppBar/>
        <Grid>
        <Grid spacing={1} container>
          <Grid container alignItems="center" justifyContent="center" md={12}>
            <Typography className="py-5" variant='h5'>
              {questions[questionInd].question}
            </Typography>
          </Grid>
          <Grid container alignItems="center" justifyContent="center" md={12}>
            {questions[questionInd].options.map((e, i) =>(
              <Grid key={i} className="p-3" md={5}>
              <Button onClick={()=>checkAnswer(questions[questionInd].correctAnswers, e)} variant="contained" fullWidth={true}>{e}</Button>
            </Grid>
            ))}
            <Grid  className="p-3" md={3}>
              <Button onClick={() => setQuestionInd(questionInd + 1)} variant="outlined" fullWidth={true}>Next</Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center"><Typography>{marks}</Typography></Grid>
        </Grid>
      </Grid>
      </div>
    </div>
  )}
export default App;