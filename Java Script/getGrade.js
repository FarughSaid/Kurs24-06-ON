import java.util.Random;

public class GradeChecker {

    // Funktion zum Generieren einer zufälligen Note zwischen 1 und 6
    public static int getGrade() {
        Random random = new Random();
        return random.nextInt(6) + 1; // Note zwischen 1 und 6
    }

    // Funktion zur Bewertung der Note mit switch-case und if-else
    public static void checkGrade() {
        int grade = getGrade();
        System.out.println("Die zufällige Note ist: " + grade);

        // Bewertung mit switch-case
        switch (grade) {
            case 1:
                System.out.println("Sehr gut");
                break;
            case 2:
                System.out.println("Gut");
                break;
            case 3:
                System.out.println("Befriedigend");
                break;
            case 4:
                System.out.println("Ausreichend");
                break;
            case 5:
                System.out.println("Mangelhaft");
                break;
            case 6:
                System.out.println("Nicht bestanden");
                break;
            default:
                System.out.println("Ungültige Note");
        }

        // Bewertung mit if-else
        if (grade == 1) {
            System.out.println("Sehr gut");
        } else if (grade == 2) {
            System.out.println("Gut");
        } else if (grade == 3) {
            System.out.println("Befriedigend");
        } else if (grade == 4) {
            System.out.println("Ausreichend");
        } else if (grade == 5) {
            System.out.println("Mangelhaft");
        } else if (grade == 6) {
            System.out.println("Nicht bestanden");
        } else {
            System.out.println("Ungültige Note");
        }
    }

}
