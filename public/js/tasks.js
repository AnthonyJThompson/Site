start = new Date(start).getTime();
end = new Date(end).getTime();
now = new Date().getTime();
console.log(start);
console.log(end);
console.log(now);
$('progress').attr('max', end - start);
$('progress').val(now - start);

setInterval(function() {
    now = new Date().getTime();
    $('progress').val(now - start);
}, 100);

add('tasks/add', { name: 'test', duration: 60 * 5 });