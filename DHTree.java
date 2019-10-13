/*
 * LM
 * Mini version of questionnaire algorithm
 * version: 2
 */

package dh;
import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

public class DHTree {
    public static void main (String[] args) throws IOException
    {
        System.out.println("Questionnaire:");
        System.out.println("For each question, please answer A, B, or C. ");
        //Calculate path
        String path = ask();
        
        //Comment out later
        System.out.println("We have assigned you the " + path + " path.");
   
    }
    
    /**
     * logos: research based path
     * ethos: service path
     * pathos: collaboration/social path
     * @return path type String
     * @throws IOException 
     */
    public static String ask() throws IOException
    {
        int logos = 0;
        int ethos = 0;
        int pathos  = 0;
        String path = "";
        String response = "";
        Scanner keyboard = new Scanner(System.in);
        
        
        ArrayList<String> keywords = new ArrayList<String>();
        //Questions
        
        //1.
        System.out.println("Arts, sciences, or both?");
        System.out.println("A. Arts");
        System.out.println("B. Sciences");
        System.out.println("C. Both");
        response = keyboard.nextLine();
        if (response.equals("A") || response.equals("a"))
        {
            logos++;
            keywords.add("arts ");
        }
        else if (response.equals("B") || response.equals("b"))
        {
            ethos++;
            keywords.add("science ");
        }
        else if (response.equals("C") || response.equals("c"))
        {
            pathos++;
            keywords.add("interdisciplinary arts and sciences ");
        }    
        //2.
        System.out.println("In your opinion, what subject isn't discussed enough in school?");
        System.out.println("A. The importance of knowledge retention vs. memorization");
        System.out.println("B. The importance of delving into what you value as a person");
        System.out.println("C. The importance of building solid communication skills");
        response = keyboard.nextLine();
        if (response.equals("A") || response.equals("a"))
        {
            logos++;
            keywords.add("study skills ");
        }
        else if (response.equals("B") || response.equals("b"))
        {
            ethos++;
            keywords.add("ethics ");
        }
        else if (response.equals("C") || response.equals("c"))
        {
            pathos++;
            keywords.add("communications ");
        }   
        //3.
        System.out.println("Which of the three activities would you most want on your bucket list?");
        System.out.println("A. Contributing a groundbreaking scientific discovery");
        System.out.println("B. Giving a TED Talk on a pressing social issue");
        System.out.println("C. Writing and publishing an autobiography");
        response = keyboard.nextLine();
        if (response.equals("A") || response.equals("a"))
        {
            logos++;
            keywords.add("science ");
        }
        else if (response.equals("B") || response.equals("b"))
        {
            ethos++;
            keywords.add("sociology ");
        }
        else if (response.equals("C") || response.equals("c"))
        {
            pathos++;
            keywords.add("writing ");
        }   
        //4.
        System.out.println("Which do you consider most important in conflict resolution?");
        System.out.println("A. All of the facts being acknowledged by both sides");
        System.out.println("B. Articulating the individual impact both sides have had in the conflict");
        System.out.println("C. Making sure both sides empathize with each other to reach mutual understanding");
        response = keyboard.nextLine();
        if (response.equals("A") || response.equals("a"))
        {
            logos++;
            keywords.add("research ");
        }
        else if (response.equals("B") || response.equals("b"))
        {
            ethos++;
            keywords.add("history ");
        }
        else if (response.equals("C") || response.equals("c"))
        {
            pathos++;
            keywords.add("sociology ");
        }   
        //5.
        System.out.println("Which of the three things would you want to change in the world first?");
        System.out.println("A. Eliminating disease");
        System.out.println("B. Homelessness and hunger");
        System.out.println("C. Working towards world peace");
        response = keyboard.nextLine();
        if (response.equals("A") || response.equals("a"))
        {
            logos++;
            keywords.add("biology ");
        }
        else if (response.equals("B") || response.equals("b"))
        {
            ethos++;
            keywords.add("urban studies ");
        }
        else if (response.equals("C") || response.equals("c"))
        {
            pathos++;
            keywords.add("global studies ");
        }   
        //6.
        System.out.println("What do you read the most in your free time?");
        System.out.println("A. educational books and articles");
        System.out.println("B. the news");
        System.out.println("C. others' personal stories");
        response = keyboard.nextLine();
        if (response.equals("A") || response.equals("a"))
        {
            logos++;
            keywords.add("history ");
        }
        else if (response.equals("B") || response.equals("b"))
        {
            ethos++;
            keywords.add("contemporary affairs ");
        }
        else if (response.equals("C") || response.equals("c"))
        {
            pathos++;
            keywords.add("literature ");
        }   
        //7.
        System.out.println("What do you want to improve on as a student");
        System.out.println("A. My researching skills");
        System.out.println("B. My academic writing skills");
        System.out.println("C. My verbal communication skills");
        response = keyboard.nextLine();
        if (response.equals("A") || response.equals("a"))
        {
            logos++;
            keywords.add("research ");
        }
        else if (response.equals("B") || response.equals("b"))
        {
            ethos++;
            keywords.add("writing ");
        }
        else if (response.equals("C") || response.equals("c"))
        {
            pathos++;
            keywords.add("debate ");
        }   
        //8.
        System.out.println("What kind of people and subjects do you follow on social media?");
        System.out.println("A. Artistic accounts");
        System.out.println("B. Activism/Social Change accounts");
        System.out.println("C. Entertainment accounts");
        response = keyboard.nextLine();
        if (response.equals("A") || response.equals("a"))
        {
            logos++;
            keywords.add("art ");
        }
        else if (response.equals("B") || response.equals("b"))
        {
            ethos++;
            keywords.add("activism ");
        }
        else if (response.equals("C") || response.equals("c"))
        {
            pathos++;
            keywords.add("media ");
        }   
        //Calculate 
        
        //Return path
        if (logos > pathos && logos > ethos)
            path = "logos";
        else if (pathos > logos && pathos > ethos)
            path = "pathos";
        else if (ethos > pathos && ethos > logos)
            path = "ethos";
        else 
            path = "mixture";
        
        //print the keywords to a txt file first, then return the path
        FileWriter keyTerms = new FileWriter("keywords.txt");
        for (String str: keywords)
            keyTerms.write(str);
        
        keyTerms.close();
        
        return path;
    }
}
