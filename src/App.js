import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useState } from "react";
import myimg from "./assets/myimg.png"
import GitHubButton from "./components/GitHubButton";

function App() {
  const [Yes,setYes] = useState(false)
  const [count,setCount] = useState(23)
  const [ButtonSize,setButtonSize] = useState(count * 8 + 3)

  const Text = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think Again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely Certain",
    "This could be a mistake!",
    "Have a Heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider",
    "Is that your final answer?",
    "You're breaking my heart :(",
    "Absolutely not!",
    "Any doubts?",
    "Seriously reconsider!",
    "One more chance?",
    "Still not convinced?",
    "Think twice!",
    "Perhaps rethink?",
    "Not feeling it?",
    "Can you be certain?",
    "Think it through!",
    "Feeling hesitant?",
    "Need a moment?",
    "Any second thoughts?",
    "Still unsure?",
    "Want to rethink that?",
    "Any reservations?",
    "Need more time?",
    "Not feeling confident?",
    "Are you convinced?",
    "Still wavering?",
    "Is it worth it?",
    "Feeling uncertain?",
    "Need reassurance?",
    "Thinking twice?",
    "Feeling indecisive?",
    "Not quite ready?",
    "Need some clarity?",
    "Is that your final decision?",
    "Any hesitation?",
    "Need a reality check?",
    "Are you second-guessing?",
    "Not sure about that?",
    "Want to sleep on it?",
    "Any qualms?",
    "Need a gut check?",
    "Still on the fence?",
    "Want to mull it over?",
    "Any reservations?",
    "Want to reconsider?",
    "Need more convincing?",
    "Still on the edge?",
    "Feeling conflicted?",
    "Any uncertainties?",
    "Want to rethink it?",
    "Need a reality check?",
    "Still on the verge?",
    "Not quite sold?",
    "Feeling apprehensive?",
    "Any hesitations?",
    "Want to think again?",
    "Need some persuasion?",
    "Still deliberating?",
    "Any second thoughts?",
    "Feeling doubtful?",
    "Want to take a step back?",
    "Need to weigh the options?",
    "Feeling unsure?",
    "Any reservations?",
    "Want to pause?",
    "Need to reflect?",
    "Feeling hesitant?",
    "Any doubts lingering?",
    "Want to hold off?",
    "Need a moment to think?",
    "Feeling a bit uncertain?",
    "Any last-minute concerns?",
    "Want to ponder some more?",
    "Need further consideration?",
    "Feeling a bit hesitant?",
    "Any nagging doubts?",
    "Want to think it over?",
    "Need more deliberation?",
    "Feeling uneasy?",
    "Any second guesses?",
    "Want to reconsider?",
    "Need more time to decide?",
    "Still pondering?",
    "Any lingering uncertainties?",
    "Want to mull it over?",
    "Need further reflection?",
    "Feeling hesitant?",
    "Any reservations?",
    "Want to hold off?",
    "Need more time to think?",
    "Feeling unsure?",
    "Any lingering doubts?",
    "Want to sleep on it?",
    "Need to gather thoughts?",
    "Feeling hesitant?",
    "Any qualms?",
    "Want to pause?",
    "Need a moment to reflect?",
    "Feeling uncertain?",
    "Any reservations?",
    "Want to wait?",
    "Need some time to mull over?",
    "Feeling a bit hesitant?",
    "Any last-minute doubts?",
    "Want to take a breather?",
    "Need to reassess?",
    "Feeling unsure?",
    "Any lingering hesitations?",
    "Want to postpone?",
    "Need to think it through again?",
    "Feeling a bit skeptical?",
    "Any doubts creeping in?",
    "Want to put it on hold?",
    "Need a bit more time?",
    "Feeling uncertain?",
    "Any hesitations?",
    "Want to revisit?",
    "Need further consideration?",
    "Feeling hesitant?",
    "Any reservations?",
    "Want to reconsider?",
    "Need more time to decide?",
    "Still pondering?",
    "Any lingering uncertainties?",
    "Want to mull it over?",
    "Need further reflection?",
    "Feeling hesitant?",
    "Any reservations?",
    "Want to hold off?",
    "Need more time to think?",
    "Feeling unsure?",
    "Any lingering doubts?",
    "Want to sleep on it?",
    "Need to gather thoughts?",
    "Feeling hesitant?",
    "Any qualms?",
    "Want to pause?",
    "Need a moment to reflect?",
    "Feeling uncertain?",
    "Any reservations?",
    "Want to wait?",
    "Need some time to mull over?",
    "Feeling a bit hesitant?",
    "Any last-minute doubts?",
    "Want to take a breather?",
    "Need to reassess?",
    "Feeling unsure?",
    "Any lingering hesitations?",
    "Want to postpone?",
    "Need to think it through again?",
    "Feeling a bit skeptical?",
    "Any doubts creeping in?",
    "Want to put it on hold?",
    "Need a bit more time?"
  ];


  function HandleNo(){
    setCount(count + 1)
    setButtonSize(count * 16 + 23)
  }

  function GetPhrase(){
    return Math.min(count,Text.length-1)
  }

  return (
    <div className="ValentineContainer">
      {
        Yes ? (
          <>
            <img src="https://media1.tenor.com/m/gUiu1zyxfzYAAAAC/bear-kiss-bear-kisses.gif" width={220} height={200} alt="" />
            <h1>Ok yay!!!</h1>
            <span style={{ marginBottom: "50px" }}>
            </span>
            <GitHubButton username={"SajjaPremsai"}  image={myimg}/>
          </>
        ):(
          <>
              <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" width={220} height={200} />
            <h1>Will you be my Valentine?</h1>
            <div className="ButtonContainer">
              <button className="btn btn-success m-4" 
              onClick={()=>setYes(true)}
              style={{fontSize:ButtonSize}}
              >Yes</button>
                <button className="btn btn-danger" 
                style={{fontSize:"23px"}}
                onClick={() => HandleNo()}>{Text[GetPhrase()]}</button>
            </div>
            <div className="tagger">
            <GitHubButton username={"SajjaPremsai"}  image={myimg}/>
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
