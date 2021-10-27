import { SettingsInputAntennaTwoTone, SettingsSystemDaydreamTwoTone, SettingsTwoTone } from '@mui/icons-material';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MenuAppBar from './component/header'
import { useState } from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';


function App() {
  const [st, setst] = useState(true);
  const [marks, setMarks] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState ([]);
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
      {showResult ? (
        <Grid>
          <Typography >{marks}</Typography>
          ) : (
        <Grid spacing={3} container>
          <Grid md={12}>
            <Typography className="py-5" variant='h5'>
              {questions[questionInd].question}
            </Typography>
          </Grid>
          <Grid md={12}>
            {questions[questionInd].options.map((e, i) =>(
              <Grid key={i} className="p-3"  md={6}>
              <Button onClick={()=>checkAnswer(questions[questionInd].correctAnswers, e)} variant="contained" fullWidth={true}>{e}</Button>
            </Grid>
            ))}
            <Grid  className="p-3" md={6}>
              <Button onClick={() => setQuestionInd(questionInd + 1)} variant="outlined" fullWidth={true}>Next</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    </div>
  ) );
}

export default App;