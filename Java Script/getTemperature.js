import java.util.Random;

public class TemperatureChecker {

    // Funktion zum Generieren einer zufälligen Temperatur zwischen -20 und 40 Grad
    public static int getTemperature() {
        Random random = new Random();
        return random.nextInt(61) - 20; // Temperatur zwischen -20 und 40
    }

    // Funktion zur Bewertung der Temperatur
    public static void checkTemperature() {
        int temp = getTemperature();
        System.out.println("Die zufällige Temperatur ist: " + temp + "°C");

        // Bewertung mit if-else
        if (temp < 0) {
            System.out.println("Es ist sehr kalt");
        } else if (temp <= 15) {
            System.out.println("Es ist kühl");
        } else if (temp <= 25) {
            System.out.println("Es ist angenehm warm");
        } else {
            System.out.println("Es ist heiß");
        }

        // Bewertung mit switch-case
        switch (temp / 10) {
            case -2:
            case -1:
                System.out.println("Es ist sehr kalt");
                break;
            case 0:
            case 1:
                System.out.println("Es ist kühl");
                break;
            case 2:
                System.out.println("Es ist angenehm warm");
                break;
            default:
                System.out.println("Es ist heiß");
        }
    }

    public static void main(String[] args) {
        checkTemperature();
    }
}
