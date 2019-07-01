
<!DOCTYPE html>
<?php error_reporting(0); ?>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Stasis - Horde Server Name</title>
  <link rel="stylesheet" type="text/css" href="./css/reset.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/styles.css">
</head>

<body>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-sm main-nav">
    <div class="container-fluid justify-content-center">
      <ul class="nav navbar-nav w-100 flex-nowrap">
      </ul>
      <ul class="nav navbar-nav justify-content-center">
        <li class="nav-item nav-logo">
          <h1><a href="index.php" alt="home">
              <&nbsp;STASIS&nbsp;>
            </a></h1>
        </li>
        <li class="nav-item">
          Horde US-Server
        </li>
      </ul>
      <ul class="nav navbar-nav w-100 justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="app.php">Guild Application</a>
        </li>
      </ul>
    </div>
  </nav>
  <main class="container-fluid">
    <div class="row px-5 py-5 justify-content-center text-center">
      <div class="col-12">
        <h2>we are currently recruiting:</h2>
        <ul class="list-inline mx-auto">
          <li class="list-inline-item"><img src="./assets/images/wow_icons/druid.png" alt="Druid"></li>
          <li class="list-inline-item"><img src="./assets/images/wow_icons/hunter.png" alt="Hunter"></li>
          <li class="list-inline-item"><img src="./assets/images/wow_icons/mage.png" alt="Mage"></li>
          <li class="list-inline-item"><img src="./assets/images/wow_icons/priest.png" alt="Priest"></li>
          <li class="list-inline-item"><img src="./assets/images/wow_icons/rogue.png" alt="Rogue"></li>
          <li class="list-inline-item"><img src="./assets/images/wow_icons/shaman.png" alt="Shaman"></li>
          <li class="list-inline-item"><img src="./assets/images/wow_icons/warlock.png" alt="Warlock"></li>
          <li class="list-inline-item"><img src="./assets/images/wow_icons/warrior.png" alt="Warrior"></li>
        </ul>
      </div>
    </div>
  </main>
  <div class="container">
    <div class="row">
      <div class="col-12">
      <?php
  if(isset($_POST['submit'])){
    $name = htmlspecialchars(stripslashes(trim($_POST['name'])));
    $age = htmlspecialchars(stripslashes(trim($_POST['age'])));
    $discord = htmlspecialchars(stripslashes(trim($_POST['discord'])));
    $bnet = htmlspecialchars(stripslashes(trim($_POST['bnet'])));
    $main_class = htmlspecialchars(stripslashes(trim($_POST['main_class'])));
    $alt_class = htmlspecialchars(stripslashes(trim($_POST['alt_class'])));
    $question_one = htmlspecialchars(stripslashes(trim($_POST['question_one'])));
    $question_two = htmlspecialchars(stripslashes(trim($_POST['question_two'])));
    $question_three = htmlspecialchars(stripslashes(trim($_POST['question_three'])));
    $question_four = htmlspecialchars(stripslashes(trim($_POST['question_four'])));
    $question_five = htmlspecialchars(stripslashes(trim($_POST['question_five'])));
    $question_six = htmlspecialchars(stripslashes(trim($_POST['question_six'])));
    $question_seven = htmlspecialchars(stripslashes(trim($_POST['question_seven'])));
    $question_eight = htmlspecialchars(stripslashes(trim($_POST['question_eight'])));
    $question_nine = htmlspecialchars(stripslashes(trim($_POST['question_nine'])));
    $question_ten = htmlspecialchars(stripslashes(trim($_POST['question_ten'])));

    if(!preg_match("/^[A-Za-z .'-]+$/", $name)){
      $name_error = 'Invalid name';
    }
    if(!preg_match("/^[0-9]*$/", $age)){
      $age_error = 'Invalid age';
    }
    if(!preg_match("/^[A-Za-z .'-]+$/", $discord)){
      $discord_error = 'Invalid characters';
    }
    if(!preg_match("/^[A-Za-z .'-]+$/", $bnet)){
      $bnet_error = 'Invalid characters';
    }
    if(strlen($main_class) === 0){
      $main_class_error = 'This cannot be left blank.';
    }
    if(strlen($question_one) === 0){
      $question_one_error = 'This cannot be left blank.';
    }
    if(strlen($question_two) === 0){
      $question_two_error = 'This cannot be left blank.';
    }
    if(strlen($question_three) === 0){
      $question_three_error = 'This cannot be left blank.';
    }
    if(strlen($question_four) === 0){
      $question_four_error = 'This cannot be left blank.';
    }
    if(strlen($question_five) === 0){
      $question_five_error = 'This cannot be left blank.';
    }
    if(strlen($question_six) === 0){
      $question_six_error = 'This cannot be left blank.';
    }
    if(strlen($question_seven) === 0){
      $question_seven_error = 'This cannot be left blank.';
    }
    if(strlen($question_eight) === 0){
      $question_eight_error = 'This cannot be left blank.';
    }
    if(strlen($question_nine) === 0){
      $question_nine_error = 'This cannot be left blank.';
    }
    if(strlen($question_ten) === 0){
      $question_ten_error = 'This cannot be left blank.';
    }
  }
?>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST" novalidate>
        <?php 
if(isset($_POST['submit']) && !isset($name_error) && !isset($age_error) && !isset($discord_error) && !isset($bnet_error) && !isset($main_error)){
  $to = 'vanessa.bach17@gmail.com'; // edit here
  $body = "Name: $name\n Age: $age\n Discord: $discord\n Bnet Tag: $bnet\n Main Class: $main_class\n
Main Alt: $alt_class\n
Are you able to meet our raid time requirements? $question_one\n
Probably the most important question on this application is this; as a progression raider, are you able to set aside your personal desires and make decisions that are objectively based on what is best for the guild and raid team? More than just a simple yes or no, please talk a little bit about what your perspective is on this topic.\n\n
Answer: $question_two\n

Our Guild is a community of players all gathered together to experience Classic WoW in whatever way they wish, however, when it comes to our progression team, there will be instances where a raider need constructive criticism. Are you an individual that is able to take criticism, and not allow it to effect you OR our community in a negative way?\n\n
Answer: $question_three\n

As our roster grows and adapts, we will need strong leaders that are able to show accountability and also players that are willing to fullfil various roles as officers. Do you consider yourself someone that sees yourself as potentially a member that would potentially desire helping us maintain a strong leadership team? If not, noworries! This is not a question that will hinder your ability to join us if 'No' is the answer, so do not worry about that.\n\n
Answer: $question_four\n

Please describe any and all experience throughout WoW's history that you have; to include progression raiding content that you have completed, PvP accomplishments that you have made, feats that you are proud of, and anything else that you would like for us to know that you have achieved. This is the question that asks you to boast about your abilities and accomplishments as a player, and elaborate as much or as little as you would like to.\n\n
Answer: $question_five\n

What is your favorite aspect of the game?\n\n
Answer: $question_six\n

What are your personal goals when it comes to experiencing what Classic WoW has to offer?\n\n
Answer: $question_seven\n

Is there anything that you feel is important to tell us regarding your expectations for < Stasis >? In other words, what is important to you that you feel our Guild must consider or be aware of in order for your needs as a player to be met?\n\n
Answer: $question_eight\n

In what way do you prefer we contact after receiving your application?\n\n
Answer: $question_nine\n

What days and times are you available for a quick conversation in Discord, where we will be able to meet you, learn a bit about you, and tell you a about our Guild?\n\n
Answer: $question_ten\n";

$subject = "Stasis Guild Application";
if(mail($to, $subject, $body)){
  echo '<p class="confirmation mt-5" role="alert">Thank you very much for your time and effort in this application. We will follow up with you ASAP and hope to see you in Azeroth!</p>';
}else{
  echo '<p class="alert alert-error" role="alert">Oops, something went wrong. Please check the form.</p>';
}
}
?>
          <div class="row mt-5">
            <div class="col-12">
              <h3>Step 1 - Basic Information</h3>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="name">Character Name:</label>
                <input type="text" id="name" class="form-control" name="name" value="<?php echo isset($_POST["name"]) ? $_POST["name"] : ''; ?>">
                <?php if(isset($name_error)) echo '<p class="error">' . $name_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="discord">Age:</label>
                <input type="text" id="age" class="form-control" name="age" value="<?php echo isset($_POST["age"]) ? $_POST["age"] : ''; ?>">
                <?php if(isset($age_error)) echo '<p class="error">' . $age_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="discord">Discord Tag #:</label>
                <input type="text" id="discord" class="form-control" name="discord" value="<?php echo isset($_POST["discord"]) ? $_POST["discord"] : ''; ?>">
                <?php if(isset($discord_error)) echo '<p class="error">' . $discord_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="bnet">Bnet Gamer Tag #:</label>
                <input type="text" id="bnet" class="form-control" name="bnet" value="<?php echo isset($_POST["bnet"]) ? $_POST["bnet"] : ''; ?>">
                <?php if(isset($bnet_error)) echo '<p class="error">' . $bnet_error . '</p>'; ?>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="main_class">Class/Main Spec: (Include class, spec and playable offspecs)</label>
                <textarea name="main_class" id="main_class" class="form-control" cols="20" rows="5">
                <?php echo isset($_POST["main_class"]) ? $_POST["main_class"] : ''; ?>

                </textarea>
                <?php if(isset($main_class_error)) echo '<p class="error">' . $main_class_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="alt_class">Main Alt:(Include class, spec and playable offspecs)</label>
                <textarea name="alt_class" id="alt_class" class="form-control" cols="20" rows="5">
                <?php echo isset($_POST["alt_class"]) ? $_POST["alt_class"] : ''; ?>
                </textarea>
              </div>
            </div>
            <div class="col-12 mt-2">
              <h3>Step 2 - The Important Questions</h3>
              <div class="form-group">
                <label for="question_one">Are you able to meet our raid time requirements? Tues/Wed/Sun @ 8:00pm-12:00am
                  EST (Possibly Thurs as well during progression/new
                  content.)</label>
                <input type="text" id="question_one" name="question_one" class="form-control"
                  aria-describedby="raid_timesHelp" value="<?php echo isset($_POST["question_one"]) ? $_POST["question_one"] : ''; ?>">
                  <?php if(isset($question_one_error)) echo '<p class="error">' . $question_one_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="question_two">Probably the most important question on this application is this; as a
                  progression raider, are you able to set aside your personal desires and make decisions that are
                  objectively based on what is best for the guild and raid team? More than just a simple yes or no,
                  please talk a little bit about what your perspective is on this topic.</label>
                <textarea name="question_two" id="question_two" class="form-control" cols="30" rows="10">
                <?php echo isset($_POST["question_two"]) ? $_POST["question_two"] : ''; ?>
                </textarea>
                <?php if(isset($question_two_error)) echo '<p class="error">' . $question_two_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="question_three">Our Guild is a community of players all gathered together to experience
                  Classic WoW in whatever way they wish, however, when it comes to our progression team, there will be
                  instances where a raider need constructive criticism. Are you an individual that is able to take
                  criticism, and not allow it to effect you OR our community in a negative way?</label>
                <textarea name="question_three" id="question_three" class="form-control" cols="30" rows="10">
                <?php echo isset($_POST["question_three"]) ? $_POST["question_three"] : ''; ?>
                </textarea>
                <?php if(isset($question_three_error)) echo '<p class="error">' . $question_three_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="question_four">As our roster grows and adapts, we will need strong leaders that are able to
                  show accountability and also players that are willing to fullfil various roles as officers. Do you
                  consider yourself someone that sees yourself as potentially a member that would potentially desire
                  helping us maintain a strong leadership team? If not, noworries! This is not a question that will
                  hinder your ability to join us if "No" is the answer, so do not worry about that.</label>
                <textarea name="question_four" id="question_four" class="form-control" cols="30" rows="10">
                  <?php echo isset($_POST["question_four"]) ? $_POST["question_four"] : ''; ?>
                </textarea>
                <?php if(isset($question_four_error)) echo '<p class="error">' . $question_four_error . '</p>'; ?>
              </div>
            </div>
            <div class="col-12 mt-2">
              <h3>Step 3 - Additional Questions & Comments</h3>
              <div class="form-group">
                <label for="question_five">Please describe any and all experience throughout WoW's history that you
                  have; to include progression raiding content that you have completed, PvP accomplishments that you
                  have made, feats that you are proud of, and anything else that you would like for us to know that you
                  have achieved. This is the question that asks you to boast about your abilities and accomplishments as
                  a player, and elaborate as much or as little as you would like to.</label>
                <textarea name="question_five" id="question_five" class="form-control" cols="30" rows="10">
                <?php echo isset($_POST["question_five"]) ? $_POST["question_five"] : ''; ?>
              </textarea>
                <?php if(isset($question_five_error)) echo '<p class="error">' . $question_five_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="question_six">What is your favorite aspect of the game?</label>
                <textarea name="question_six" id="question_six" class="form-control" cols="30" rows="10">
                <?php echo isset($_POST["question_six"]) ? $_POST["question_six"] : ''; ?>
              </textarea>
                <?php if(isset($question_six_error)) echo '<p class="error">' . $question_six_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="question_seven">What are your personal goals when it comes to experiencing what Classic WoW
                  has to offer?</label>
                <textarea name="question_seven" id="question_seven" class="form-control" cols="30" rows="10">
                <?php echo isset($_POST["question_seven"]) ? $_POST["question_seven"] : ''; ?>
              </textarea>
                <?php if(isset($question_seven_error)) echo '<p class="error">' . $question_seven_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="question_eight"> Is there anything that you feel is important to tell us regarding your
                  expectations for < Stasis&nbsp;>? In other words, what is important to you that you feel our Guild
                    must
                    consider or be aware of in order for your needs as a player to be met?</label>
                <textarea name="question_eight" id="question_eight" class="form-control" cols="30" rows="10">
                <?php echo isset($_POST["question_eight"]) ? $_POST["question_eight"] : ''; ?>
              </textarea>
                <?php if(isset($question_eight_error)) echo '<p class="error">' . $question_eight_error . '</p>'; ?>
              </div>
            </div>
            <div class="col-12 mt-2">
              <h3>Step 4 - What's Next?</h3>
              <div class="form-group">
                <label for="question_nine">In what way do you prefer we contact after receiving your
                  application?</label>
                <textarea name="question_nine" id="question_nine" class="form-control" cols="30" rows="10">
                <?php echo isset($_POST["question_nine"]) ? $_POST["question_nine"] : ''; ?>
              </textarea>
                <?php if(isset($question_nine_error)) echo '<p class="error">' . $question_nine_error . '</p>'; ?>
              </div>
              <div class="form-group">
                <label for="question_ten"> What days and times are you available for a quick conversation in Discord,
                  where we will be able to meet you, learn a bit about you, and tell you a about our Guild?</label>
                <textarea name="question_ten" id="question_ten" class="form-control" cols="30" rows="10">
                <?php echo isset($_POST["question_ten"]) ? $_POST["question_ten"] : ''; ?>
              </textarea>
                <?php if(isset($question_ten_error)) echo '<p class="error">' . $question_ten_error . '</p>'; ?>
              </div>
            </div>

            <div class="col-12">
              <input type="submit" name="submit" value="Submit" class="btn btn-primary btn-lg btn-block">
            </div>
        </form>
      </div>
    </div>
  </div>
  </div>

  <footer class="container-fluid mt-5">
    <div class="row">
      <div class="col-12 text-center cta">
        Questions? stasis.guild.info@gmail.com
      </div>
    </div>
  </footer>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="js/bootstrap.js"></script>
</body>

</html>