import React from "react"
import styled, { css, keyframes } from "styled-components"
import {
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAQ = ()=>{
    const Email = "mailto:support@chalkapp.co";
    const Discord = "https://discord.gg/hZ4bkTjJfR";
    return(
        <>
        <Title>Daily Tournaments</Title>
        <Info>
        Daily Tournaments are real-money tournaments that allow players to play at their own pace. Each tournament takes place within a 12-hour window, and players can enter within one hour of the tournament’s closing time. Upon entry, players have one hour to play based on the Tournament’s ruleset. Stats are tracked throughout the hour and posted to the leaderboard. Once the 12-hour window closes, Chalk compares player scores, and winners are selected. The top three players will receive a real-money payout, while the remaining seven participants, ranking 4-10, receive Chalk Credit.
        </Info>

        <Title>Pocket Tournaments</Title>
        <Info>
        Pocket Tournaments are real-money tournaments that require a pool of players to play at the same time. Each Pocket Tournament is scheduled for a specified time and lasts for a short duration (30 minutes, 1 hour, etc.). Once the Pocket Tournament has a minimum number of players and the start time occurs, Chalk tracks player stats for the Pocket Tournament duration. Stats are added to the leaderboard throughout the Pocket Tournament after each player’s game concludes. Once the Pocket Tournament is over, Chalk compares player scores, and winners are selected. The top three players will receive a real-money payout, while the remaining seven participants, ranking 4-10, receive Chalk Credit.
        </Info>

        <Title>Tie Breaker</Title>
        <Info>
        In the event of a tie, the system will use Negative Stats to determine who ultimately wins the Tournament. 
        <br/> <br/>
        For example, a Grenade Kill Tournament ends with two first-place winners. The player who died the least number of times throughout the Tournament is the winner.
        <br/> <br/>
        Suppose users tie in Negative Stats, the tie breaks using traditional golf rules. If two users tie for a ranking in this scenario, the prizes for the following two rankings will be combined and split evenly. 
        <br/> <br/>
        For example, if two users tie for 2nd place, the winnings from 2nd and 3rd place will be combined and split evenly between them. If the 2nd prize is $5 and the 3rd prize is $3, each user would receive $4, and the rest of the leaderboard would start at 4th place.
        </Info>

        <Title>Negative Stats</Title>
        <Info>
        Negative Stats are those Stats that reflect negatively on your gameplay. Some examples of Negative Stats might be deaths during gameplay, team kills (friendly fire), or failure to complete an in-game action (defuse a bomb, barricade a door, etc.). Negative Stats are used in rare cases to break ties and in more advanced Tournaments.
        </Info>

        <Title>Daily Challenges</Title>
        <Info>
        Daily Challenges are free-to-enter challenges that earn the player Chalk Credit. Each day, players will have new challenges to complete by performing in-game actions or completing various in-game milestones. Some examples include running a certain number of in-game miles, getting a certain amount of headshots, or playing a certain number of games throughout the day. Daily Challenges are a fun way to change how you play, challenge yourself, and earn some free Tournament entries along the way.
        </Info>

        <Title>Chalk Credit</Title>
        <Info>
        Chalk Credit is free in-app credit that players can use for Tournament Entries. 
        <br/> <br/>
        <Info style={{fontWeight: "bold"}}>Chalk Credit:</Info>
        <br/> <br/>
        {" "}{" "}{`\u2022`}{" "} Cannot be purchased or sold
        <br/> <br/>
        {" "}{" "}{`\u2022`}{" "} Cannot be withdrawn for real cash
        <br/> <br/>
        {" "}{" "}{`\u2022`}{" "} Is not a form of currency or virtual asset
        <br/> <br/>
        {" "}{" "}{`\u2022`}{" "} Does not hold value outside of the Chalk App ecosystem
        <br/> <br/><br/>
        Chalk Credit can be earned via Daily Challenges, winning a 4th-10th place in a tournament, or referring new users to the app.
        <br/> <br/>
        Chalk Credit is always used in favor of deposited funds when entering Tournaments.
        </Info>

        <Title>Stat Tracking</Title>
        <Info>
        Chalk uses your Playstation Network ID or Xbox Live Gamertag to track your in-game stats. We verify your ID/Gamertag by using first-party login protocols for Xbox Live and Playstation Network. 
        <br/> <br/>
        Chalk tracks Stats when the user is either participating in a Tournament or a Daily Challenge. Users who opt-in allow Chalk to continue tracking your gameplay to determine trends, make recommendations about how players can improve their individual skillset, and show more relevant Tournaments with higher individual win-potential.
        <br/> <br/>
        Chalk uses bespoke API libraries to ensure that stats are tracked accurately in near real-time. 
        </Info>

        <Title>Enabling Public stats for Activision Games</Title>
        <Info>
        By default, your Activision sets your profile’s stats to Private. For Chalk to track your stats, you must set your Activision profile to Public. To switch your profile visibility to Public, follow these steps:
        <br/> <br/>
        {" "}{" "}1.{" "} Log in to your Activision account at {"\n"} <Text style={{color: "#80EBB6"}} onPress={()=>{Linking.openURL('https://my.callofduty.com')}}>https://my.callofduty.com</Text>
            <br/> <br/>
        {" "}{" "}2. {" "}At the top right of the page, click on your account name and click “Linked Accounts” in the drop-down menu.
            <br/> <br/>
        {" "}{" "}3. {" "}Under the Gaming Networks section, set “Data Visible” to “All” for Playstation and Xbox.
        </Info>

        <Title>Fees</Title>
        <Info>
        Fees are present throughout the application and are always made apparent to the user. Chalk does not hide fees in any way. Still, it is essential to acquaint yourself with the various fee types. 
        <br/> <br/>
        <Info style={{fontWeight: "bold"}}>Withdrawal Fees</Info>
        <br/> <br/>
        Chalk will take a 10% fee from every withdrawal from Chalk App to your bank account. For example, if you withdraw $1000, Chalk will take a $100 fee, and you will receive $900 in your bank account within 5-7 business days.
        <br/> <br/>
        Users can withdraw a maximum of $5000 per month from their Chalk accounts to their bank account.
        <br/> <br/>
        <Info style={{fontWeight: "bold"}}>Tournament Entry Fees</Info>
        <br/> <br/>
        Tournament Entry Fees are clearly stated and vary per Tournament. Your entry fee does not increase or change the Tournament Payout in any way. 
        </Info>

        <Title>Tournament Prizes</Title>
        <Info>
        Chalk Tournaments clearly state the preset prize on the Tournament Entry screen. Chalk uses a 60/40 algorithm to determine Payouts. Chalk earns 60% of the entries, and 40% of the entries go to the winners. 
        <br/> <br/>
        For example, if a Tournament has 50 players and the entry fee is $5, the total prize will be $100, split among the top three players. Each tournament has a different Prize Split Ratio, which is visible on the Tournament details screen. Chalk earns a $150 profit in this scenario ($250 total entries - $100 prize = $150 Chalk profit).
        <br/> <br/>
        If a Tournament has a max entry limit of 50, but only 20 players join, the prize will remain $100. In this case, Chalk earns $0, and the players will make the same $100 regardless. 
        </Info>

        <Title>Payments</Title>
        <Info>
        Chalk users can “Top Up” their Chalk Account using various payment methods, including Apple Pay, ACH Bank Transfer via Plaid and Dwolla, Credit Card, or Debit Card. Users can withdraw money deposited into Chalk at any time for a 10% fee. Users can track their transactions and payment history on the Wallet Screen. 
        </Info>

        <Title>Withdrawals</Title>
        <Info>
        Withdrawals from Chalk incur a 10% withdrawal fee. Withdrawals can take up to 5-7 business days to appear in your bank account. Users can only make withdrawals to a Bank Account via ACH transfer. Chalk uses Plaid to verify user bank accounts and Dwolla to facilitate the transfer. Please see our Privacy Policy for more information about how your financial data is secured.
        <br/> <br/>
        Withdrawal cancellations are typically possible within 12-24 hours of the withdrawal request. However, our third-party vendor determines the processing times, and they may change. To check if withdrawal cancellation is possible, select “Cancel” on any transaction, and the system will check. Once a withdrawal is processed, Chalk cannot reverse it.
        </Info>

        <Title>Referrals</Title>
        <Info>
        Users can earn Chalk Credit through referrals. Two counterparties participate in a referral, the Referrer (the person referring a new user) and the Referee (the person accepting the referral). 
        <br/> <br/>
        <Info style={{fontWeight: "bold"}}>Referral Bonus</Info>
        <br/> <br/>
        Each user has a unique URL/code that links to their Chalk account. Referrers can share this link with as many Referees as they would like. Once a Referee follows the link, signs up, and joins their first Tournament, the referral bonus of $5 in Chalk Credit will automatically issue to both counterparties. 
        <br/> <br/>
        <Info style={{fontWeight: "bold"}}>Deposit Bonus</Info>
        <br/> <br/>
        Upon a successful referral, Referees can earn a 100% deposit bonus of up to $100 in Chalk Credit. For example, if a new user follows a referral link and deposits $150, they will receive $100 in Chalk Credit, bringing their total balance to $250.
        </Info>

        <Title>Is Chalk Legal?</Title>
        <Info>
        The mobile application and website (the “Services”) organize and host Tournaments for video game players where skill is the predominant factor in determining the gameplay or Tournament results. The Services are only available to residents of states where the Services and tournaments are legally permitted, which Chalk accomplishes via a geofencing function incorporated into the software. 
        <br/> <br/>
        The Services are only available to users over the age of 18, and each user must enter their age when creating an account. Additionally, each user agrees to be bound by our terms of service, which requires users to represent and warrant they are over the age of 18 and permit us to remove any user in breach of service terms.
        </Info>

        <Title>Is Chalk Considered Gambling?</Title>
        <Info>
        Chalk is not gambling. Instead, it is viewed legally as a game of skill. The law views Chalk this way because skill is the predominant factor in the gameplay and Tournament outcome. The entry fees collected by Chalk do not influence the prize paid out. 
        </Info>

        <Title>Didn't Find What You're Looking For?</Title>
        <View style={{justifyContent: "space-evenly", flexDirection:"row", marginTop: 25}}>
        <IconLink target="_blank" href={Discord}>
            <Icons icon={faDiscord}/>
        </IconLink>
        <IconLink target="_blank" href={Email}>
            <Icons icon={faEnvelope}/>
        </IconLink>
        <br/> <br/>
        <br/> <br/>
        
        </View>
    </>
    )
}

export default FAQ

const Title = styled.text`
    margin-top: 5%;
    color: black;
    font-size: 24px;
    font-weight: 700;
    text-align: left;
    width: 96%;
`
const Info = styled.text`
    margin-top: 10px;
    color: black;
    font-size: 16px;
    width: 96%;
`
const Text = styled.text`
`
const View = styled.div`
`
const IconLink = styled.a`
    cursor: pointer;
    text-decoration: none;
`;

const Icons = styled(FontAwesomeIcon)`
    font-size: 58px;
    cursor: pointer;
    color: black;
    text-align: center;
    display: inline;
    height: 75px;
    width: 75px;
    padding: 25px;
`;