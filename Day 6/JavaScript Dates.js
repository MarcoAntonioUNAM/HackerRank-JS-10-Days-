function getMaxLessThanK(n, k) {
    let maximumValue = 0;
    for (let i = 1; i < n; i++){
        for (let j = i + 1; j <= n; j++){
            let andValue = i & j;
            if (andValue < k && maximumValue < andValue) {
                maximumValue = andValue;
            }
        }
    }
    return maximumValue;
}
//Fin del codigo realizado - End of code done
function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
}