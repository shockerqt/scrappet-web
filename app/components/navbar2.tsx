'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const Navbar2 = () => (
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger />
        <NavigationMenu.Content>
          <NavigationMenu.Link />
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Link />
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger />
        <NavigationMenu.Content>
          <NavigationMenu.Sub>
            <NavigationMenu.List />
            <NavigationMenu.Viewport />
          </NavigationMenu.Sub>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator />
    </NavigationMenu.List>

    <NavigationMenu.Viewport />
  </NavigationMenu.Root>
);

export default Navbar2;
