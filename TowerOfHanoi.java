public class TowerOfHanoi {
    public static void solve(int n, char from_rod, char to_rod, char aux_rod) {
        if (n == 1) {
            System.out.println("Move disk 1 from rod " + from_rod + " to rod " + to_rod);
            return;
        }
        solve(n - 1, from_rod, aux_rod, to_rod);
        System.out.println("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod);
        solve(n - 1, aux_rod, to_rod, from_rod);
    }

    public static void main(String[] args) {
        int n = 3; // Number of disks
        solve(n, 'A', 'C', 'B'); // A, B and C are names of rods
    }
}
