import { Component } from '@angular/core';
import {
  ClickMode,
  Container,
  Engine,
  HoverMode,
  MoveDirection,
  OutMode,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  id = 'tsparticles';
  particlesOptions = {
    background: {
      color: {
        value: '#333232',
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.grab,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        grab: {
          distance: 400,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#868585',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: false,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },

    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit = async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  };
}
