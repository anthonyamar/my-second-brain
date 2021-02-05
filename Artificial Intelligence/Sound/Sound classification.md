Classifiying audio with #artificial-intelligence can be done using #TensorFlow's YAMNet model. 

YAMNet is a deep neural network that predict 521 audio event classes. It has been trained on the [AudioSet](https://research.google.com/audioset/) dataset from Google/Youtube.

Paradoxically, sound classification is done by doing image analysis. Sound can have at least three kind of visual representation : 
- The Waveform
- The Fourier Transofrm 
- The [Mel Spectogram](Mel%20Spectogram.md)

YAMNet is using TensorFlow to perform deep-learning algorithms on Mel Spectogram representations  in order to achieve things like pattern recognition, thus the usage for audio classification. 

Going further :
- [Sound classification using YAMNet - TensorFlow](https://www.tensorflow.org/hub/tutorials/yamnet)
- [Pitch Detection using SPICE - TensorFlow](https://www.tensorflow.org/hub/tutorials/spice)
