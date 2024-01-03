import sys
from pynput import keyboard

def key_pressed(key):
    print(str(key))
    sys.stdout.flush()
 
listener = keyboard.Listener(on_press = key_pressed)
listener.start()
input()