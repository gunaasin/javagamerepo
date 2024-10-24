import React from 'react'
import { Maincom } from '../Structrue/Maincom';
export const Component4 = () => {
  const codesnip = {
    java: `// Main class to run the program
public class Main {
    public static void main(String[] args) {
        // Create a hero
        Hero hero = new Hero("Archer");

        // Create command objects for the hero's actions
        Command moveCommand = new MoveCommand(hero);
        Command attackCommand = new AttackCommand(hero);

        // Create the invoker (control panel)
        CommandInvoker controlPanel = new CommandInvoker();

        // Execute the move command
        controlPanel.setCommand(moveCommand);
        controlPanel.executeCommand();  // Output: Archer moves forward!

        // Execute the attack command
        controlPanel.setCommand(attackCommand);
        controlPanel.executeCommand();  // Output: Archer attacks the enemy!
    }
}

// Command interface
public interface Command {
    void execute();
}

// Hero class
public class Hero {
     String name; 

    public Hero(String name) {
        this.name = name;
    }

    public void move() {
        System.out.println(name + " moves forward!");
    }

    public void attack() {
        System.out.println(name + " attacks the enemy!");
    }
}

// Move Command
public class MoveCommand implements Command {
     Hero hero;

    public MoveCommand(Hero hero) {
        this.hero = hero;
    }

    @Override
    public void execute() {
        hero.move();  // Delegates the move action to the hero
    }
}

// Attack Command
public class AttackCommand implements Command {
     Hero hero;

    public AttackCommand(Hero hero) {
        this.hero = hero;
    }

    @Override
    public void execute() {
        hero.attack();  // Delegates the attack action to the hero
    }
}

// Command Invoker (Control Panel)
public class CommandInvoker {
    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void executeCommand() {
        command.execute();
    }
}

    `}
    const answer ={
      java:`// Main class to run the program
public class Main {
    public static void main(String[] args) {
        // Create a hero
        Hero hero = new Hero("Archer");

        // Create command objects for the hero's actions
        Command moveCommand = new MoveCommand(hero);
        Command attackCommand = new AttackCommand(hero);

        // Create the invoker (control panel)
        CommandInvoker controlPanel = new CommandInvoker();

        // Execute the move command
        controlPanel.setCommand(moveCommand);
        controlPanel.executeCommand();  // Output: Archer moves forward!

        // Execute the attack command
        controlPanel.setCommand(attackCommand);
        controlPanel.executeCommand();  // Output: Archer attacks the enemy!
    }
}

// Command interface
public interface Command {
    void execute();
}

// Hero class
public class Hero {
    private String name; 

    public Hero(String name) {
        this.name = name;
    }

    public void move() {
        System.out.println(name + " moves forward!");
    }

    public void attack() {
        System.out.println(name + " attacks the enemy!");
    }
}

// Move Command
public class MoveCommand implements Command {
    private Hero hero;

    public MoveCommand(Hero hero) {
        this.hero = hero;
    }

    @Override
    public void execute() {
        hero.move();  // Delegates the move action to the hero
    }
}

// Attack Command
public class AttackCommand implements Command {
    private Hero hero;

    public AttackCommand(Hero hero) {
        this.hero = hero;
    }

    @Override
    public void execute() {
        hero.attack();  // Delegates the attack action to the hero
    }
}

// Command Invoker (Control Panel)
public class CommandInvoker {
    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void executeCommand() {
        command.execute();
    }
}
 
    `}
    
  return (
    <>

    <Maincom  title={"Design Patterns"}
    answer={answer}
    game={"https://html-classic.itch.zone/html/3198875/index.html"}
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/ea90d5b71c1de9ca63/4edd0d41b72ec4f9'}
       steps={['Starting the Game : Run the TowerDefenseGame class as the main class to start the game.',
       
       'Placing Cannons : Use the Factory Method Pattern to create different types of cannons (e.g., BasicCannon, AdvancedCannon).Place cannons strategically along the enemy path to attack incoming enemies.',
       
       'Managing Resources : Implement the Singleton Pattern to ensure one instance of the game manager.The game manager keeps track of resources (e.g., currency) for building and upgrading cannons.',
       
       'Enemy Waves : Enemies spawn in waves, moving towards the destination.Use the Observer Pattern to notify cannons when enemies enter their range',
       
       'Upgrading Cannons : Employ the Decorator Pattern to enhance cannons with abilities or upgrades.Players use available resources to upgrade cannons, improving attack power, range, or special abilities.',
       
       'Cannon Strategies : Apply the Strategy Pattern to define different attack strategies for cannons.Cannons can utilize strategies such as single-target attack, area-of-effect attack, or rapid-fire attack.',
       
       'Special Abilities : Integrate the Command Pattern to implement cannon upgrade commands.Players execute upgrade commands to enhance cannon properties.',
       
       'Cannon States : Utilize the State Pattern to manage cannon states (e.g., idle, attacking, upgrading).Cannons transition between states based on their actions and game events.',
     
       ]}
       codesnip={codesnip}
       />
    
    </>
  )
}
