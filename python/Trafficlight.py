import math
import random
import time

currentlight = 'red'

def trafficLightFunction(roadScale):
  global currentlight
  minimunWeightOfVehicle = 1000
  if roadScale >= minimunWeightOfVehicle: # Check if there is a vehicle
    currentlight = 'green'
    print(currentlight)
    time.sleep(1)
  else:
    if currentlight == 'green': # Check if currentlight is 'green'
       currentlight = 'yellow'
       print(currentlight)
       time.sleep(1)
    currentlight = 'red'
    print(currentlight)
    time.sleep(1)

def simulateTheScale():
  for _ in range(10):
    scale = math.floor(random.random() * 2000); #Simulate a random vehicle weight between 0 and 2000 kg
    print(f"Current vehicle weight: {scale} kg")
    trafficLightFunction(scale)

simulateTheScale()