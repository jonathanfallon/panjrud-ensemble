{
  description = "Development flake for panjrud-ensemble";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShell = pkgs.mkShell {
          name = "panjrud-ensemble-dev";

          buildInputs = with pkgs; [
            nodejs_24
            pnpm
            git
            curl
          ];

          shellHook = ''
            export NODE_OPTIONS="--max-old-space-size=4096"
            alias npm='pnpm'
          '';
        };
      });
}