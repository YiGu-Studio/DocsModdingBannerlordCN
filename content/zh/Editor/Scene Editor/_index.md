---
title: "SCENE EDITOR"

hide: 
- toc
- breadcrumb
---

## Creating Entity

Game Entities are basic building blocks of Scenes. Every mesh, light, decal, script behaviour are components of entities. Creating an empty entity In the editor, you can begin by creating a new, empty entity by using the Add Empty Entity button from tool bar, then you can attach different components for different needs. All entities can be composed of multiple components. Adding Component Component can be added from the toolbar after selecting an entity.

## Editor Shortcuts

General Editor Usage Shortcut Editor State Show/hide helpers H Any mode New scene Alt + 1 Any mode Save scene Alt + 2 Any mode Open scene Alt + 3 Any mode Start mission Alt + 4 Any mode Start mission as Alt + 5 Any mode Scene Options Alt + 6 Any mode Terrain Options Alt + 7 Terrain select Terrain Elevation Alt + 8 Terrain Paint Elevate Terrain Paint Alt + 9 Terrain Paint Paint Shift between relevant 2 editor modes (select-add, select-elevatepaint etc) Space Any mode Undo/Redo Ctrl+Z, Ctrl+Y Any mode Camera Controls Shortcut Editor State Focus on selected entity F Entity Select Editor camera orbiting mode Alt (Hold) + Right Mouse Button Entity Select Pan Alt (Hold) + Middle Mouse Button Entity Select Zoom in/out Alt (Hold) + Mouse scroll wheel Entity Select Camera speed increase/decrease Ctrl + Mouse scroll wheel Any mode Camera speed set to 1 Ctrl + Middle mouse button Any mode Prefab transform Shortcut Editor State Rotate while placing Z, X, C, T, reset to default with R Entity Add Move entity with placing on terrain Hold P Entity Select Move entity vertically Hold N Entity Select Move entity on the XY plane Hold G Entity Select Show translate triad T Entity Select Show rotating triad R Entity Select Show scaling triad Y Entity Select Duplicate the entity dragging on the translate triad Shift+Click or Shift+Drag to side Entity Select Hide any triad on selected entity V Entity Select Triads shown based on local coordinates (default) Alt+L Entity Select Triads shown based on world coordinates Alt+W Entity Select Material of an object under mouse opens in material editor (or material comes to inspector) M+Click Entity Select Terrain Shortcut Editor State Select all terrain nodes Ctrl + A Terrain Select Lower when rise selected Alt + Click Terrain Paint Elevate Rise when lower selected Alt + Click Terrain Paint Elevate Flatten when Rise or Lower selected Ctrl + Left Mouse Click Terrain Paint Elevate Smoothen when Rise or Lower selected Shift + Click Terrain Paint Elevate Transfer height value to Flatten (when flatten selected) Alt + Click Terrain Paint Elevate Flora paint (Not from layers) Left Mouse Click Entity Paint Resize currently selected flora B (hold) + Mouse drag left/right Entity Paint Place 1 flora (flora seen on brush) Ctrl + Left Mouse Click Entity Paint Navmesh hotkeys Shortcut Editor State Fill in closest 4 vertices (creates a quad) Shift + Click Navigation Mesh Add Fill in the last 4 vertices (creates a quad) Ctrl + Space Navigation Mesh Add Move vertex without selecting Ctrl + Drag Navigation Mesh Add Delete face with mouse over (leaves vertices) Alt + Click Navigation Mesh Add Delete face and remove all vertices Alt + X + Click Navigation Mesh Add Selection mode - vertex 1 Navigation Mesh Select Selection mode - edge 2 Navigation Mesh Select Selection mode - face 3 Navigation Mesh Select Select all vertices, edges or face (depends on the current selection) Ctrl + A Navigation Mesh Select Delete selected vertices, edges or face Delete Navigation Mesh Select

## Path Editing

Level designer can easily add, edit or delete paths and path points by the scene editor. Adding a new path User can use the Add New Path button at the upper toolbar. User should enter a unique name for every path. After the path is added, the editor’s editing state will become “Path Select”. By spacing either space or the “Add a new path point” button from the upper toolbar, user can transition to the “Path Node Add” mode and start adding new path nodes.

## Terrain Creation

Create a new terrain Terrain creation, removal, and node modifications can be done in Terrain Inspector > Properties tab. Terrain node count in both dimensions, their resolution and size can be specified in New Terrain Properties panel. This parameters must be specified proir to the creation, although they can be canged per-node basis later. Adjusting node properties Node resolution can be adjusted by selection nodes (Hold CTRL for multiple selection)m and change the resolution parameter in Node Properties panel.

## Entity Inspector

Transform Panel Transform panel allows you to change position, rotation and scale properties of the selected entities. All of these values are relative to the parent of the selected entity. If Entity has no parent, then they are the Global values. (in World space). Scale Locked If the lock icon is in locked state, changing any component of scale parameter will set all scale components to the same value, entity will be in uniform scaling mode.

## Navigation Mesh Inspector

Tools These tools help you to generate and manipulate the navigation mesh: Generation Tools Auto Generate: As the name implies, automatically generates the navigation mesh with resppect to the parameters above. Generate Grids: Generates grid navigation mesh for the terrain only. It ignores the entities on the scene. Create New Face: Creates a new navigation mesh quad face on the coordinates where the camera is. Extrude: Remove: Removes the selected navigation mesh edge.

## Alignment and Snapping Tools

Pivot Alignment Tool The Pivot alignment tool applies the chosen transform values of one entity to another entity. The tool makes it easier for users to create overlapping or precisely aligned entities. If an entitity is selected in the editor, the user can set up the alignment tool by pressing Alt + A. This will register the currently selected entity as the input entity. Selecting a second entity with the left mouse button, will then open the interface screen of the alignment tool.

## Distance Tool

Distance Measure Tool The Distance Tool measures the distance between two points in the scene. Distance measure mode can be activated by either pressing Alt + D shortcut or the respective button on the editor toolbar. While holding the left mouse button, drag the mouse between two points in the scene to measure distance. The tool snaps to vertices if close enough to a one by default, holding down Left Shift overrides this.

## Mass Selection

Mass Selection script allows you to select objects in a box and apply random rotations to selected objects. You can relocate and resize the selection box with translating, rotating and scaling entity which has “mass_selection” script. Bounding Box Constraint property allows you to select objects which has smaller bounding box than it’s value. Locate Selection Box After Select Objects After Apply Random Rotations

## Precomputed Radiance Transfer - GI System

We introduce a new global illumination system to the engine. It is based on a pre-baked system called “Precomputed Radiance Transfer”. This technique allow us to bake the local ambient in the scene and display it in an optimized manner at runtime. Baked data is independent from the atmospheres. Thus, we can light the scene with the same bake data for every atmosphere. With Without Baking Procedure Scene baking is divided into a couple of parts:

## Resizing Terrain

Resizing Terrain If required, terrain node count can be resized at Resize Terrain panel in Terrain Inspector. There are 4 direction that you can add new nodes, or remove existing nodes. +X, +Y, -X, -Y (South, East, North, West, respectively) (Coloring is consistent with Gizmo). Adding or removing nodes will automatically relocate existing entities and floras to their new locations. New nodes will have their height data unspecified, and may look unconnected to the rest of the terrain.

## Scene Level System

Level System New level system replaces the old, hardcoded system with a much more extandable and unified system. Adding a new level (or deleting an existing one) to a scene can be done in Levels panel under SceneOptions inspector. Levels in Game - Bannerlord - Currently, Bannerlord recognizes a few levels that has a meaning in-game. Which are: 1) level_1 2) level_2 3) level_3 4) siege 5) civilian More info about usage of these levels can be found in: Siege sahneleri tasarımı (If you dont have access to this document, please request access from game play team)

## Terrain Mesh Blend System

We introduce a new terrain mesh blending system. Certain terrain layers can blend into chosen meshes. Blend height, smoothness and random height offsets can be changed. These values can be saved to prefabs and can also be changed in scene per mesh. Heightmap blending can also be used to change the blending behaviour with respect to the mesh’s heightmap. With Blending Without Blending Terrain Layer Restrictions Terrain layers should satisfy some restrictions before they are eligible to be a mesh blend layer.
