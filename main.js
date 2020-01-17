{
    const [COUNT, PADDINGLEFT, PADDINGBOTTOM] = [10, 10, 10];
    const canvas = document.getElementById('canvasElement');
    const context = canvas.getContext('2d');
    
    let rect = new Array(COUNT).fill(5);
    let time = 0;
    
    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        rect = rect.map((item, index) => {
            item = item < 1 ? item + 1 : 
            item > 10 ? item - 1 : 
            item + (-1 + randomTo(2));
          
            time = time + 0.1;
            context.fillRect(
              PADDINGLEFT + (Math.sin(time + index) * 5), 
              (PADDINGBOTTOM * index) + (index * 3), 
              item, 
              8
            );
            return item;
        });
    }, 50);

    function randomTo(max) {
        return Math.trunc(Math.random() * (max + 1));
    }
}