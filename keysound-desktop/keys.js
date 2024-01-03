const spawner = require('child_process').spawn;
var Sound = require('sound-play');

const python_process = spawner('python3', ['./keys.py'])

python_process.stdout.on('data', (data) => {

    const key = data.toString()

    console.log(key)
    console.log(key.length)

    if(key.substr(0, 1) === "'"){

        const keystr = key.substr(1, 1)

        if(keystr === '.'){

            Sound.play('./nk-cream/[.wav')

        }
        else if(keystr === '\\'){

            Sound.play('./nk-cream/[.wav')

        }
        else if(keystr === '`'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '/'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '!'){

            Sound.play('./nk-cream/[.wav')

        }
        else if(keystr === '@'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '#'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '$'){

            Sound.play('./nk-cream/[.wav')

        }
        else if(keystr === '%'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '^'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '&'){

            Sound.play('./nk-cream/[.wav')

        }
        else if(keystr === '*'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '('){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === ')'){

            Sound.play('./nk-cream/[.wav')

        }
        else if(keystr === '_'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '+'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '{'){

            Sound.play('./nk-cream/[.wav')

        }
        else if(keystr === '}'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '|'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === ':'){

            Sound.play('./nk-cream/[.wav')

        }
        else if(keystr === '"'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '<'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '>'){

            Sound.play('./nk-cream/[.wav')

        }
        else if(keystr === '?'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === '~'){

            Sound.play('./nk-cream/shift.wav')

        }
        else{

            const keysound = './nk-cream/' + keystr + '.wav'
 
            Sound.play(keysound)
        }

    }
    else if(key.substr(0, 1) === '"'){

        const keystr = key.substr(1, 1)

        const keysound = './nk-cream/' + keystr + '.wav'
 
        Sound.play(keysound)

    }
    else {

        const keystr = key.substr(4, key.length - 5)

        if(keystr === 'cmd_r'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === 'alt_r'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === 'down'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === 'up'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === 'right'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === 'left'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === 'caps_lock'){

            Sound.play('./nk-cream/shift.wav')

        }
        else if(keystr === 'esc'){

            Sound.play('./nk-cream/shift.wav')

        }
        else {

            const keysound = './nk-cream/' + keystr + '.wav'
 
            Sound.play(keysound)

        }
        
    }
    

})