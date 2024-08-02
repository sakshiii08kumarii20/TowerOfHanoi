function solveHanoi() {
    const moves = [];
    hanoi(3, 'rodA', 'rodC', 'rodB', moves);
    animateMoves(moves);
}

function hanoi(n, fromRod, toRod, auxRod, moves) {
    if (n === 1) {
        moves.push([fromRod, toRod]);
        return;
    }
    hanoi(n - 1, fromRod, auxRod, toRod, moves);
    moves.push([fromRod, toRod]);
    hanoi(n - 1, auxRod, toRod, fromRod, moves);
}

function animateMoves(moves) {
    const rods = {
        'rodA': document.getElementById('rodA'),
        'rodB': document.getElementById('rodB'),
        'rodC': document.getElementById('rodC')
    };

    let moveIndex = 0;

    function moveDisk() {
        if (moveIndex >= moves.length) return;

        const [fromRod, toRod] = moves[moveIndex];
        const disk = rods[fromRod].lastElementChild;
        rods[toRod].appendChild(disk);

        moveIndex++;
        setTimeout(moveDisk, 500);
    }

    moveDisk();
}

window.onload = () => {
    const rodA = document.getElementById('rodA');
    for (let i = 3; i > 0; i--) {
        const disk = document.createElement('div');
        disk.className = 'disk';
        disk.style.width = `${i * 20}px`;
        disk.style.bottom = `${(3 - i) * 20}px`;
        rodA.appendChild(disk);
    }
};
