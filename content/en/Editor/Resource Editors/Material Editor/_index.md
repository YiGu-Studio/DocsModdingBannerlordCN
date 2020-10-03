---
title: "MATERIAL EDITOR"

hide:
- toc
- breadcrumb
---

## Overview
<br>
![overview](overview.png)<br>
<br>
Our proprietary game engine uses standard metallic PBR pipeline for material authoring.<br>
New materials can easily be created after navigating to a folder, right click on empty space, and select **Create > Material**.<br>
<br>
Material editor can be opened by double clicking an existing material in the resource browser.<br>
<br>
![create_new](create_new.png)<br>
<br>
## Inspector

#### Shader
<br>
![shader](shader.png)<br>
<br>
You can select apporopriate shader from this Shader Selection widget.<br>
There are a few mainly used shaders; most important ones are pbr_metallic and pbr_shading.<br>
<br>
#### pbr_shading
<br>
This shader is heavily used and exists just because our engine did not use PBR shading pipeline in the early years of development, most content was not created for PBR pipeline, so this shader is created to support our already existing content and only used during the transition phase.<br>
New content should not use this shader, instead you should use pbr_metallic.<br>
<br>
#### pbr_metallic
<br>
This is what you should use most of the time. This shader uses standard metallic PBR pipeline and inputs are compatible with most texture authoring softwares.<br>
**Inputs**:<br>
Albedo and Normal: These are pretty standard, outputs of texture authoring softwares can directly be used. Specular: This texture uses its 4 channel for different purposes. Red channel contains Metallic information, Green channel contains Glossiness (inverse of Roughness), Blue channel contains Ambient Occlusion, and Alpha channel contains Translucency (for vegetation shaders only)<br>
<br>
#### grass
<br>
This shader is a derivative of pbr_metallic, and should only be used on grass meshes. Contains special effects like wind animation, sway animation, smooth LOD transition, color multiplication from terrain, etc.<br>
<br>
#### flora_leaf
<br>
This shader is a derivative of pbr_metallic, and should only be used on leaf parts of trees / bushes. Contains special effects like wind animation, sway animation, color multiplication from terrain, smooth LOD transition, translucency (Alpha channel of Specular texture), etc.<br>
<br>
#### flora_bark
<br>
This shader is a derivative of pbr_metallic, and should only be used on bark parts of trees / bushes. Contains special effects like wind animation, smooth LOD transition, etc.<br>
<br>
## Textures
<br>
![textures](textures.png)<br>
<br>
This panel is used to set input textures of shaders.<br>
Texture names are self explanatory but there are a few special cases.<br>
<br>
#### Diffuse2Map
<br>
This input is used internally by engine to create special effects / blendings like Shield Banner Paintings, Banner texture in this slot will only appear where Diffuse 1 Texture contains alpha. Usage of this texture really depends on the shader used.<br>
<br>
#### DetailNormalMap
<br>
This input is used to create micro imperfections and additional high frequency detail on top on regular normal mapping. Scale of this texture can be adjusted in Texture Settings panel<br>
<br>
#### HeightMap
<br>
This input is used in both Parallax Occlusion Shading, and Displacement.<br>
<br>
#### Decal(\_\_\_)Map
<br>
These inputs are used internally by engine to create skinned decals on entities (like blood and mud on agents).<br>
<br>
## Texture Settings
<br>
![texture_setting](texture_settings.png)<br>
<br>
This setting can be used to adjust textures further for more variation and tweaking. Some settings are only used for some special shaders to pass custom parameter.<br>
<br>
#### Areamap Scale
<br>
Used internally for parameter passing.<br>
<br>
#### Specular Coef
<br>
Metallic channel (Red channel of Specular texture) is multiplied by this value in shader.<br>
<br>
#### Gloss Coef
<br>
Gloss channel (Green channel of Specular texture) is multiplied by this value in shader.<br>
<br>
#### Ambient Occlusion Coef
<br>
AO channel (Blue channel of Specular texture) is multiplied by this value in shader.<br>
<br>
#### Normal Depth
<br>
Normal textures X and Y channels are multiplied by this value. If you set a value close to Zero, surface will appear more flat since X and Y values will be close to zero and only Z direction is contributed to normal mapping.<br>
<br>
#### Detail Normal Scale
<br>
This parameters sets how many times the detail textures should tile. Higher values increases frequency.<br>
<br>
#### Parallax Mode
<br>
You can select displacement method to use for this material. Options are, Parallax or Displacement. Both require a heightmap texture. Parallax uses Parallax Occlusion Mapping in shader, Displacement uses hardware tesselation.<br>
<br>
#### Parallax Amount
<br>
Intensity of displacement effect.<br>
<br>
#### Parallax Offset
<br>
Sets the middle value to a desired height. (Value of 0.5 in heightmap).<br>
<br>
## Material Shader Flags
<br>
![material_flags](material_flags.png)<br>
<br>
You can enable and disable some compile time conditionals in shaders to enable/disable some effects. These are compile time flags and the Material shader will be compiled with these flags.<br>
Some important onces are:<br>
<br>
#### use_detailnormalmap
<br>
This flag should be enabled to utilize Detail Normal Map feature.<br>
<br>
#### alpha_test
<br>
Diffuse 1 textures alpha values are used as a cut-out texture. Alpha threshold can be specified in Transparency panel.<br>
<br>
#### use_specular
<br>
This flag should be enabled in all cases. It is only here for lagecy reasons.<br>
<br>
#### use_procedural_wind_animation
<br>
Can be enabled to create a very simple and cheap, sine wave wind effect. Mostly used for tents / flags. (Should not be mistaken with cloth physics feature).<br>
<br>
#### self_illumination
<br>
Enables self illumination. Illumination texture should be specified in Diffuse 2. Brightness parameters can be adjusted in Vector Arguments panel.<br>
<br>
#### use_specular_from_diffuse
<br>
Never ever use this. It is only used in pbr pipeline transitioning phase and only here for legacy reasons. Simply grayscales the diffuse texture, and uses it as specular texture.<br>
<br>
#### use_double_colormap_with_mask_texture
<br>
Used internally to create team color effect in clothing. A special texture is created to specify which parts of clothing should be affected by team colors. A simple Red / green texture for primary and secondary colors is specified in Diffuse 2 texture. Primary and Secondary colors are set by gameplay code as Factor Colors.<br>
<br>
## Transparency
<br>
![transparency](transparency.png)<br>
<br>
Alpha blend mode and Alpha Test threshold values can be specified here.
Multi Pass Alpha feature can also be enabled here. This technique renders the mesh twice with both alpha test and alpha blend to create bulky but smooth looking alpha testes meshes. (Alpha test in middle areas for high coverage but smooth alpha blended gradients on edges, such as Hair).<br>
<br>
## Others
<br>
![others](others.png)<br>
<br>
This panel is usually for technical / internal usage and mostly used to create materials for core engine features.<br>
<br>
## Vector Arguments
<br>
![vector_args](vector_args.png)<br>
<br>
This panel contains two Vector Arguments. Both containing 4 real values, with a total of 8.<br>
These vector arguments are used as parameters for some special shader effects, like setting the brightness of Self Illumination, speed and direction of Texture Sweep, etc.<br>
What changes with which vector argument is really depends on the effects it is used for.<br>
<br>
## Factor Colors
<br>
![factor_color](factor_color.png)<br>
<br>
These colors are multiplied with internal Factor Color on meshes that are usually changed using gameplay code. If you really want some texture to be slightly darker, greener etc. you can multiply them using this panel.<br>
<br>
## Vertex Layout
<br>
![vdecl](vdecl.png)<br>
<br>
This panel used to specify Vertex Layout that should be used by Vertex Shaders.<br>
<br>
#### Bump Map
<br>
Should be enabled in most cases (Standard PBR requires this).<br>
<br>
#### Skinning and Skinning Precise
<br>
If your material is going to be used with a skinned mesh, enable Skinning, if your skinned mesh is quite large that has important small polygons (like eyes) enable Skinning Precise. (This disables some optimizations so only use if it is really necessary).<br>
<br>
#### Double UV
<br>
Enable if your custom shaders require double UV channels.<br>
<br>
#### PostFX
<br>
Used internally by engine.<br>
<br>
